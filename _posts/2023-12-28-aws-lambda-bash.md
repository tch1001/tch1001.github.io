---
layout: post
title: "Custom Binaries on AWS Lambda + Poking Around (Bonus)"
categories: [AWS, Lambda, Devops]
---
AWS Lambda is a serverless computing platform that allows you to run code without provisioning or managing servers. It is a great way to run code without having to worry about the underlying infrastructure. It is also very cheap, and you only pay for the time your code is running.

If your workload is a simple script, you can use their inline editor to write your code. But if you want to use a custom binary, you need to package it into a zip file and upload it to AWS Lambda. This is a guide on how to do that.

In my example, I will upload a binary that I compiled from source. I will not be using the CLI and will be using the AWS Web Console instead.

# Creating the Lambda Function
First create a Lambda function. I will be using the Amazon Linux 2 runtime. I will also be using the default execution role.

![Create Lambda Function](/assets/images/customruntime1.png)

Select Amazon Linux 2

![Select Amazon Linux 2](/assets/images/customruntime2.png)

We will now be uploading a bootstrap file in the next section

![Telling Us to Upload Bootstrap](/assets/images/customruntime3.png)

When the function has finished creating, the Code dashboard will look like this

![Code Dashboard](/assets/images/customruntime4.png)

The `README.md` file reads
```
A runtime is a program that runs a Lambda function's handler method when the function is invoked. The runtime can be included in your function's deployment package, or in a [layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). [Learn more](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html) about custom Lambda runtimes.

For reference, this function includes a sample [Bash](https://www.gnu.org/software/bash/) runtime in `bootstrap.sample` and a corresponding handler file `hello.sh.sample`. As a next step, you should provide your own bootstrap by either adding a layer implementing a custom runtime or including a `bootstrap` file in this function's deployment package.
```

We may be tempted to just rename the function `bootstrap.sample` to `bootstrap` and the function `hello.sh.sample` to `hello.sh`. 

![Renaming the Files](/assets/images/customruntime5.png)

Then create a new test event and run it.

![Creating a Test Event](/assets/images/customruntime6.png)

We should see a successful test.

![Success](/assets/images/customruntime8.png)

## Common Error: Creating a new file instead of renaming

If you create a new file instead of renaming, you will see this error

![bootstrap not executable](/assets/images/customruntime7.png)

## Common Error: Not deploying the function

After you make changes to the files (including renaming), you need to deploy the function. Otherwise the old files will still be used. And they will say they cannot find the `bootstrap` file.

![bootstrap not found](/assets/images/customruntime9.png)

## Common Error: I accidentally deleted the bootstrap file

If you accidentally deleted the old `bootstrap.sh.sample` file, and now you can't create one that has executable permissions, you must do the following

```
cat > bootstrap << EOF
#!/bin/sh
set -euo pipefail

# Handler format: <script_name>.<bash_function_name>
#
# The script file <script_name>.sh  must be located at the root of your
# function's deployment package, alongside this bootstrap executable.
source $(dirname "$0")/"$(echo $_HANDLER | cut -d. -f1).sh"

while true
do
    # Request the next event from the Lambda runtime
    HEADERS="$(mktemp)"
    EVENT_DATA=$(curl -v -sS -LD "$HEADERS" -X GET "http://${AWS_LAMBDA_RUNTIME_API}/2018-06-01/runtime/invocation/next")
    INVOCATION_ID=$(grep -Fi Lambda-Runtime-Aws-Request-Id "$HEADERS" | tr -d '[:space:]' | cut -d: -f2)

    # Execute the handler function from the script
    RESPONSE=$($(echo "$_HANDLER" | cut -d. -f2) "$EVENT_DATA")

    # Send the response to Lambda runtime
    curl -v -sS -X POST "http://${AWS_LAMBDA_RUNTIME_API}/2018-06-01/runtime/invocation/$INVOCATION_ID/response" -d "$RESPONSE"
done
EOF

cat > hello.sh << EOF
function handler () {
    EVENT_DATA=$1

    RESPONSE="{\"statusCode\": 200, \"body\": \"Hello from Lambda!\"}"
    echo $RESPONSE
}
EOF
```

Change the permissions
```
chmod +x bootstrap
chmod +x hello.sh
```

Then zip it up and upload it
```
zip my_bootstrap.zip bootstrap hello.sh
```

![Uploading the bootstrap](/assets/images/customruntime10.png)
![Uploading the bootstrap](/assets/images/customruntime11.png)
![Works now](/assets/images/customruntime12.png)

# Custom Binary

Do note that whatever scripts or binaries you want to run, you need to compile it on the same OS as the Lambda runtime. In this case, it is Amazon Linux 2. So I will be using a Docker container to compile my binary.

## Docker Container

First setup our build environment. By looking at our runtime image, we can refer to the docs to find the Dockerfile for the image. 

![Runtime Image](/assets/images/cr13.png)

Which we can find the image for [here](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#runtimes-images-provided)

![Documentation](/assets/images/cr14.png)

We go ahead and clone the repo 

```
git clone --branch provided.al2 --depth 1 https://github.com/aws/aws-lambda-base-images.git 
cd aws-lambda-base-images
# either of the following
sed -i 's/scratch/public.ecr.aws\/lambda\/nodejs:18/g' Dockerfile.provided.al2
sed -i 's/scratch/amazonlinux:2/g' Dockerfile.provided.al2
docker build -f Dockerfile.provided.al2 -t lambda_image:1.0.0 .
```
We had to replace the `FROM scratch` with `FROM public.ecr.aws/lambda/nodejs:18` because we want to `docker exec` into the container later and have a nice shell, and `scratch` does not have a shell. Also because it seems like we can't run `/lambda-entrypoint.sh` the scratch image (either this is bug in Amazon's GitHub, or Lambda loads containers differently from our local Docker `runc`).
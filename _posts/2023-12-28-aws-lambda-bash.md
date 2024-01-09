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

---
layout: post
title: "Lab: Playing with Postgresql High Availability using repmgr, pgpool, barman"
categories: [Kubernetes, Postgresql, Devops]
---
We will be installing postgresql on a blank debian image for pedagogical value.
```
cat << EOF > minideb-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: minideb-pod
spec:
  containers:
  - name: minideb-1
    image: bitnami/minideb:latest
    command: 
      - "tail"
      - "-f"
      - "/dev/null"
EOF
k apply -f minideb-pod.yaml
k exec -it minideb-pod -- bash
```
## Installing Postgresql
Following this [video](https://www.youtube.com/watch?v=aMku0wOsaMY&list=PLpNYlUeSK_rnanDUNr4KiTlkLTmtqK-sQ&index=4), 
```
apt update
apt install -y postgresql
service postgresql start
service --status-all
su postgres
psql
create database mydb;
create user myuser with encrypted password 'mypass';
grant all privileges on database mydb to myuser;
\c mydb
create table mytable (id int);
\d
\q
vim /etc/postgresql/15/main/pg_hba.conf # add the following line:
# host all all 0.0.0.0/0 scram-sha-256
k port-forward minideb-pod 5432:5432
# in another shell
PGPASSWORD=mypass psql -h localhost -U myuser -d mydb
\d
```
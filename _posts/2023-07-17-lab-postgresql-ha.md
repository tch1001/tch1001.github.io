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
apt install -y postgresql-15
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
# Streaming Replication
Following this [video](https://www.youtube.com/watch?v=Yy0GJjRQcRQ)

```
su postgres
export PATH=/usr/lib/postgresql/15/bin:$PATH
/usr/lib/postgresql/15/bin/initdb -D /tmp/primary_db
sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /tmp/primary_db/postgresql.conf
sed -i "s/#port = 5432/port = 5433/g" /tmp/primary_db/postgresql.conf
pg_ctl -l /tmp/primary_db_logfile -D /tmp/primary_db start 
psql -p 5433
create user repuser replication;
# the following is bad security but for our lab purposes it's easier
echo "host all repuser 0.0.0.0/0 trust" > /tmp/primary_db/pg_hba.conf
pg_ctl -l /tmp/primary_db_logfile -D /tmp/primary_db reload 
pg_basebackup -h localhost -U repuser --checkpoint=false -D /tmp/replica_db/ -R --slot=some_name -C --port 5433
sed -i "s/port = 5433/port = 5434/g" /tmp/replica_db/postgresql.conf
pg_ctl -l /tmp/replica_db_logfile -D /tmp/replica_db start
# connect to both databases to do a manual sync test
psql postgres -p 5433
select * from pg_stat_replication;
create table tbl(id int);
insert into tbl values(1);
\q
psql postgres -p 5434
select * from pg_stat_wal_receiver; 
select * from tbl;
```

# pgpool 
pgpool acts as a load balancer and connection pool (although pgbouncer is a superior connection pool)

I follow instructions from [this video](https://youtu.be/qpxKlH7DBjU)
```
apt install -y pgpool2
find / 2>/dev/null | grep pgpool.conf
vim /etc/pgpool2/pgpool.conf # change settings according to video
pgpool -n &
```
in another terminal
```
psql -p 9999 postgres
create table tbl1(id int);
insert into tbl1 values(1);
```
go back to stop pgpool
```
pgpool stop
pgpool -n /tmp/pgpool.log 2>&1 &
```
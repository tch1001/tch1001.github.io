---
layout: post
title: "Setting up Postgresql Backup on Kubernetes (+ Reclaiming PV Shennanigans Teaser)"
categories: [Kubernetes, Postgresql]
---
Btw, I will personally *guide* you in setting up these stuff for $25 (around 1h meeting online), contact me at [@tch1001](https://t.me/tch1001)

## Setting up main database
If you already have a psql database running, then skip this section. If not, you can do the following
```
helm template postgresql bitnami/postgresql > postgresql-rendered.yaml
sed -i .yaml 's/cpu: 250m//g' postgresql-rendered.yaml
sed -i .yaml 's/memory: 256Mi//g' postgresql-rendered.yaml
sed -i .yaml 's/storage: "8Gi"/storage: "1Gi"/g' postgresql-rendered.yaml
k apply -f postgresql-rendered.yaml
> secret/postgresql created
> service/postgresql-hl created
> service/postgresql created
> statefulset.apps/postgresql created
k get pvc # copy the volume id
> NAME                STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS       AGE
> data-postgresql-0   Bound    pvc-4b5f5b5d-1a11-4b3d-8566-6c651a5a1c3b   8Gi        RWO            do-block-storage   2m21s
```

If at any point in time you messed it up, just 
```
k get secret # GET PASSWORD OUT FIRST (see next section)
k delete -f postgresql-rendered.yaml
k get pvc # see that it's gone
k get pv  # see that it's gone too
```
and fix the yaml file and reapply it. 

Do note, if you happen to regenerate the yaml file, the password will be the old password since it is stored in the PV.

### Connecting to Postgresql Database
#### Extract password
```
k get secret postgresql -o yaml | grep postgres-password | awk '{print $2}' | base64 --decode
o9mtKno7tN% # the % indicates the absence of a newline (may differ on your machine)
export PGPASSWORD=$(!!) # paste the output of the previous command
echo $PGPASSWORD
o9mtKno7tN
```
#### Port-Forward and Connect
```
k port-forward service/postgresql 5432:5432
psql -h localhost -U postgres -d postgres
> postgres=# \q
```

## Setting up Backup
```
# echo $(k exec svc/main-postgresql -c postgresql -- cat /opt/bitnami/postgresql/conf/pg_hba.conf) > config/pg_hba.conf
# echo $(k exec svc/main-postgresql -c postgresql -- cat /opt/bitnami/postgresql/conf/postgresql.conf) > config/postgresql.conf
wget https://raw.githubusercontent.com/postgres/postgres/master/src/backend/libpq/pg_hba.conf.sample -o config/pg_hba.conf
wget https://raw.githubusercontent.com/postgres/postgres/master/src/backend/utils/misc/postgresql.conf.sample -o config/postgresql.conf
echo "host replication repuser 0.0.0.0/0 scram-sha-256" >> config/pg_hba.conf
echo "wal_level = replica" >> config/postgresql.conf
echo "max_wal_senders = 2" >> config/postgresql.conf
echo "max_replication_slots = 2" >> config/postgresql.conf
echo "synchronous_commit = off" >> config/postgresql.conf
k create configmap main-config --from-file config
```

## Extra: Prevent Auto Deletion of PV upon Deletion of PVC
Let's set the PV to have a reclaim policy of "Retain" so that it doesn't get deleted when the PVC is deleted. *Just in case* we do something stupid.

```
k edit pv pvc-4b5f5b5d-1a11-4b3d-8566-6c651a5a1c3b # from k get pvc
# change Delete to Retain, save and exit (:wq in vim)
> persistentvolume/pvc-4b5f5b5d-1a11-4b3d-8566-6c651a5a1c3b edited
```

### Preparing to Reclaim PV
Do note, if you happen to regenerate the yaml file, the password will be the old password since it is stored in the PV.

```
k delete -f postgresql-rendered.yaml
k get pvc # see it's still there! 
k delete pvc
k get pv # see that it's still there!
> NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS     CLAIM                                         STORAGECLASS       REASON   AGE
> pvc-4b5f5b5d-1a11-4b3d-8566-6c651a5a1c3b   8Gi        RWO            Retain           Released   tickninja-staging/data-postgresql-0           do-block-storage            10m
# but the STATUS is "Released" instead of "Bound"
k edit pv # we need it to be "Available" so we can reattach a PVC to it
# delete the whole "claimRef" section
k get pv 
> NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM                                         STORAGECLASS       REASON   AGE
> pvc-4b5f5b5d-1a11-4b3d-8566-6c651a5a1c3b   8Gi        RWO            Retain           Available                                                 do-block-storage            19m
# now we can reattach a PVC to it
```
I will continue recovery in another blog post.

## Resources
- [https://stackoverflow.com/questions/63149131/how-implement-postgres-backups-on-kubernetes](https://stackoverflow.com/questions/63149131/how-implement-postgres-backups-on-kubernetes)
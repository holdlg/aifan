# PostgreSQL

## 快速启动

```bash
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres:15.0
```

```bash
docker run --name postgres14 -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres:14.5
```

## pgdata 设置

```bash
docker run -d \
	--name some-postgres \
	-e POSTGRES_PASSWORD=mysecretpassword \
	-e PGDATA=/var/lib/postgresql/data/pgdata \
	-v /root/pg:/var/lib/postgresql/data \
	postgres:15.0
```

## 本机安装

```bash
sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-9-x86_64/pgdg-redhat-repo-latest.noarch.rpm
sudo dnf -qy module disable postgresql
sudo dnf install -y postgresql15-server
sudo /usr/pgsql-15/bin/postgresql-15-setup initdb
sudo systemctl enable postgresql-15
sudo systemctl start postgresql-15
```

## 设置远程

vi /var/lib/pgsql/15/data/postgresql.conf

```
listen_addresses = '*'
```

vi /var/lib/pgsql/15/data/pg_hba.conf 添加

```
host    all             all             0.0.0.0/0           scram-sha-256
```

重启服务

```sh
systemctl restart postgresql-15
```

设置密码

```sh
sudo -i  -u postgres

psql

ALTER USER postgres WITH PASSWORD 'postgres';
```

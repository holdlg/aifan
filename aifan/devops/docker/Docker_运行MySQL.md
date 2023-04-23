# [Docker] 运行MySQL

```bash
docker pull mysql:tag

docker run --name mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag

# 开放端口,存储数据，设置编码
docker run --name mysql 
  -p 3306:3306 
  -v /home/user/mysql:/var/lib/mysql
  -e MYSQL_ROOT_PASSWORD=my-secret-pw 
  --character-set-server=utf8mb4 
  --collation-server=utf8mb4_unicode_ci
  -d mysql:tag

```

```bash
docker run --name mysql -p 3306:3306  -v /root/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag --character-set-server=utf8mb4  --collation-server=utf8mb4_unicode_ci
```

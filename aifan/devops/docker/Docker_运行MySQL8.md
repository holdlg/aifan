# [Docker] 运行MySQL8

```bash
 docker run --name mysql8 -v /root/datadir:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql:8.0.11
```

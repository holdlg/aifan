# Alma91 安装 mysql8

redhat9/almalinux9/centos9/rockylinux9

## 安装

```bash
yum install https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm
yum search mysql-community
yum install -y mysql-community-server
systemctl status mysqld
systemctl start mysqld
systemctl enable mysqld
# 查看默认密码，大概在第四行结尾处
cat /var/log/mysqld.log
或者
grep "A temporary password" /var/log/mysql/mysqld.log
mysql -u root -p
```

## 设置

```sql
# 必须修改初始密码，不改后面执行SQL异常
#mysql8对密码有要求，长度最小8位，包含字母大小写、数字、特殊字符
#先用下面命令修改成符合要求的密码
alter user 'root'@'localhost' identified with mysql_native_password by '123@qweR';
exit

# bash 重新登录
mysql -u root -p


#让root用户可以在任意主机上登录
use mysql;
select host,user from user;

update user set host = '%' where user = 'root';

flush privileges;
```

## 不区分大小写

```sh
# mysql8 只有在初始化库的时候，可以设置不区分大小写

# 注意备份数据库
rm -rf /var/lib/mysql

/usr/sbin/mysqld --initialize --user=root --lower-case-table-names=1

```

## docker

```sh
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:8.0.32
```

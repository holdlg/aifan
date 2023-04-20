
# [Docker] 离线镜像

## 安装docker

参考官方网站一步一步来就行了。

[Get Docker Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1 "Get Docker Ubuntu")

重要操作如下：

```bash
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
   
sudo apt-get update

sudo apt-get install docker-ce

docker pull ubuntu:14.04
```

## 下载镜像

```bash
docker pull ubuntu:14.04
```

## 创建容器

```bash
docker run -p 10000:10000 -p 80:80 -p 3000:3000 -p 8089:8089 --name mhn -t -i ubuntu:14.04 /bin/bash
```

## 安装程序

可以使用命令，这里写成shell 脚本了,然后运行脚本。

vi /opt/init\_mhn.sh

```bash
#!/bin/bash

set -x

apt-get update 
apt-get upgrade -y 
apt-get install git wget gcc supervisor -y 
cd /opt/ 
git clone https://github.com/threatstream/mhn.git 
cd mhn

cat > /etc/supervisor/conf.d/mhntodocker.conf <<EOF
[program:mongod]
command=/usr/bin/mongod
stdout_logfile=/var/log/supervisor/%(program_name)s.log
stderr_logfile=/var/log/supervisor/%(program_name)s.log
autorestart=true
autostart=true

[program:nginx]
command=/usr/sbin/nginx
stdout_events_enabled=true
stderr_events_enabled=true
autostart=true
autorestart=true

EOF

mkdir -p /data/db /var/log/mhn /var/log/supervisor

supervisord &

#Starts the mongod service after installation
echo supervisorctl start mongod >> /opt/mhn/scripts/install_mongo.sh

./install.sh

supervisorctl restart all
```

## 制作 docker image

```bash
docker commit <容器ID> <镜像名称>

举个栗子：

docker commit eafd9111ada6 mhn
```

参考链接：

[docker commit](http://www.runoob.com/w3cnote/docker-use-container-create-image.html "docker commit")

## 导出/保存镜像

```bash
docker save -o <save image to path> <image name>

举个栗子：

docker save -o /root/mhn mhn
```

## 压缩镜像

```bash
tar -Jcf /root/mhn.tar.xz /root/mhn
```

## 下载镜像

```bash
sftp -P 12345 root@1.1.1.1:/root/mhn.tar.xz /root/
```

## 解压镜像

```
tar -Jxf /root/mhn.tar.xz
```

## 导入/加载镜像

```bash
docker load -i /root/mhn
```

## 查看镜像

```bash
docker images
```

ok.. 现在可以正常使用离线部署的docker镜像了。

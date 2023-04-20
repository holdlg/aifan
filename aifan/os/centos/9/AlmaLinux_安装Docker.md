# [AlmaLinux] 安装Docker

```bash
 sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
                  
 sudo yum install -y yum-utils
 
 # 官方源
 sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
 
 # 阿里云源 
 sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

sudo yum update

# 2021
sudo yum install docker-ce docker-ce-cli containerd.io -y
# 2022
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
# 2023
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# 启动docker
systemctl start docker

# 开机自启动docker
systemctl enable docker


```

# 替换镜像源

```bash
vi /etc/docker/daemon.json

{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/"]
}

or 

{
    "registry-mirrors" : [
          "https://registry.docker-cn.com",
          "https://docker.mirrors.ustc.edu.cn",
          "http://hub-mirror.c.163.com",
          "https://cr.console.aliyun.com/"
    ]
}
systemctl daemon-reload
systemctl restart docker
```

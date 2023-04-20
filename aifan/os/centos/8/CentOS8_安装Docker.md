# [CentOS8] 安装Docker

# 方式一

1.  安装依赖

```bash
sudo dnf install https://download.docker.com/linux/centos/8/x86_64/stable/Packages/containerd.io-1.3.9-3.1.el8.x86_64.rpm
```

1.  官方脚本在线安装，使用aliyun源

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

# 方式二

1.  清理docker相关的依赖

```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

1.  设置依赖源

```bash
sudo yum install -y yum-utils

sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

1.  安装

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

# 替换docker-ce.repo

```
vi  /etc/yum.repos.d/docker-ce.repo

## 替换内容(注意转义\/)
:%s/download.docker.com/mirrors.ustc.edu.cn\/docker-ce/g
```

# 镜像内容源替换

```
vi /etc/docker/daemon.json


{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/"]
}

systemctl restart docker
```

# [CentOS7] 安装Docker用aliyun源\_副本

阿里云镜像源

# 官方脚本自动安装

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

# 手动安装

清理环境

```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

安装必要依赖

```bash
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

添加标准版本的aliyun安装源

```bash
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos//docker-ce.repo
```

添加标准版本的ustc安装源

```bash
sudo yum-config-manager \
    --add-repo \
    https://mirrors.ustc.edu.cn/docker-ce/linux/centos//docker-ce.repo
```

安装Docker-ce

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

启动docker

```bash
sudo systemctl start docker
```

确认docker-ce安装

```
sudo docker --version
或
sudo docker -v
```

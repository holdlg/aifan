# [CentOS7] 在线安装Docker-ce

# 在线安装

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

添加标准版本的安装源

```bash
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

安装Docker-ce

```bash
sudo yum install docker-ce
```

启动docker

```bash
sudo systemctl start docker
```

确认docker-ce安装

```bash
sudo docker --version
或
sudo docker -v
```

源文链接

[https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/ "https://docs.docker.com/install/linux/docker-ce/centos/")

# bug 1

```
https://download.docker.com/linux/centos/7/x86_64/stable/repodata/repomd.xml: [Errno 12] Timeout on https://download.docker.com/linux/centos/7/x86_64/stable/repodata/repomd.xml: (28, 'Operation timed out after 30001 milliseconds with 0 out of 0 bytes received')
正在尝试其它镜像。
```

解决方法：

1.  删除缓存数据

```bash
yum clean all
```

1.  创建元数据缓存

```bash
yum makecache
```

1.  继续安装

```bash
sudo yum install docker-ce
```

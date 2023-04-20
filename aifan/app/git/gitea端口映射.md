# gitea

Gitea clone git Gitea 使用 git 协议，免密码克隆，需要密码

## error

```bash
git clone git@10.0.235.288:www/xmi-web.git
Cloning into 'xmi-web'...
git@10.0.235.288's password:
Permission denied, please try again.
git@10.0.235.288's password:
Permission denied, please try again.
git@10.0.235.288's password:
git@10.0.235.288: Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

## 原因

这个是 ssh 端口问题造成的。gitea 是 docker 安装的，宿主机 ssh 端口 22，gitea 容器里 ssh 是 2222。git clone
git@10.0.235.288:www/xmi-web.git, 默认是 22，所有...

## 解决方法

1. 使用非标准 SSH 端口连接

```bash

git clone ssh://git@hostname:port/.../xxx.git

举例如下：
git clone ssh://git@10.137.20.113:2222/root/test.git
```

2. 修改宿主机的 ssh 端口为非标准 ssh 端口，容器映射时 ssh 映射 22 端口

在 centos9/redhat9/almalinux9/rockylinux9 系统

```bash
vi /etc/ssh/sshd_config

#Port 22
Port 2222
```

重启 ssh

```bash
systemctl restart sshd
```

## 重启 ssh bug

如果出现

```bash
Bind to port 2222 on 0.0.0.0 failed: Permission denied
```

请关闭 selinux

```bash
setenforce 0
```

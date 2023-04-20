# VSCode
开发工具

## 免密登录无效
vscode 免密 登录alamLinux8/CentOS8 配置正确，但是登录无效，可能是selinux 的原因

解决方法：

```bash
#查看 selinux
getenforce

#关闭 selinux
setenforce 0

#开启 selinux
setenforce 1

#永久关闭
vi /etc/selinux/config

SELINUX=disabled
#SELINUX=enforcing

```


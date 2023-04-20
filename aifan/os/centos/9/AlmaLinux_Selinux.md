# [AlmaLinux] Selinux

```bash

# 关闭selinux

vi /etc/sysconfig/selinux

SELINUX=enforcing
改为
SELINUX=disabled

设置
setenforce 0
查看
getenforce
```

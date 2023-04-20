# [AlmaLinux] 开启ssh

```bash
# 安装
yum install openssh-server

#启动sshd服务
systemctl start sshd
 
#停止sshd服务
systemctl stop sshd
 
#重启sshd服务
systemctl restart sshd
 
#查看sshd服务的状态
systemctl status sshd
 
#sshd服务开机启动
systemctl enable sshd
 
#sshd服务禁止开机启动
systemctl disable sshd
 
#锁定sshd服务
systemctl mask sshd
 
#解锁sshd服务
systemctl unmask sshd
 
#重新加载sshd服务的配置文件
systemctl reload sshd

```

# [CentOS7] firewall操作

```bash

# 启动
systemctl start firewalld

# 查看状态
systemctl status firewalld

# 停止
systemctl stop firewalld

# 禁用
systemctl disable firewalld

# 在开机时启用一个服
systemctl enable firewalld.service

# 在开机时禁用一个服务
systemctl disable firewalld.service


启动服务：systemctl start firewalld.service
关闭服务：systemctl stop firewalld.service
重启服务：systemctl restart firewalld.service
服务的状态：systemctl status firewalld.service

查看服务是否开机启动：systemctl is-enabled firewalld.service
查看已启动的服务列表：systemctl list-unit-files|grep enabled
查看启动失败的服务列表：systemctl --failed
查看版本： firewall-cmd --version
查看帮助： firewall-cmd --help
显示状态： firewall-cmd --state
查看所有打开的端口： firewall-cmd --zone=public --list-ports
更新防火墙规则： firewall-cmd --reload
查看区域信息:  firewall-cmd --get-active-zones
查看指定接口所属区域： firewall-cmd --get-zone-of-interface=eth0
拒绝所有包：firewall-cmd --panic-on
取消拒绝状态： firewall-cmd --panic-off
查看是否拒绝： firewall-cmd --query-panic
```

# [CentOS8] 时间设置

查看系统当前的时区命令：\*\*timedatectl \*\*
设置系统时区位亚洲/上海：

**timedatectl set-timezone Asia/Shanghai**

```bash
yum install -y chrony

systemctl start chronyd
systemctl enable chronyd

chronyd -q 'pool ntp.aliyun.com iburst'
chronyd -q 'server ntp.ntsc.ac.cn iburst'

chrony配置文件是 /etc/chrony.conf

# aliyun的chrony.conf配置
server ntp.aliyun.com iburst
stratumweight 0
driftfile /var/lib/chrony/drift
rtcsync
makestep 10 3
bindcmdaddress 127.0.0.1
bindcmdaddress ::1
keyfile /etc/chrony.keys
commandkey 1
generatecommandkey
logchange 0.5
logdir /var/log/chrony


```

```bash
校准时间命令：（过时）

yum install -y ntpdate

ntpdate us.pool.ntp.org
```

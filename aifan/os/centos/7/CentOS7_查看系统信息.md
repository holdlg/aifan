# [CentOS7] 查看系统信息

# 版本

```bash
cat /etc/redhat-release
或
cat /proc/version
```

# 64位和32位

```bash
getconf LONG_BIT
```

# 最后开机时间

```bash
# 查看启动历史记录
last reboot

# 查看最后一次系统启动的时间
who -b
# 查看当前系统开机运行时间
who -r
```

# [Ubuntu20] 创建新用户

```shell
# 创建用户
useradd fir

# 设置密码
passwd fir

# 指定命令解释程序（通常为/bin/bash）
usermod -s /bin/bash fir

# 指定用户主目录
usermod -d /home/fir fir
```

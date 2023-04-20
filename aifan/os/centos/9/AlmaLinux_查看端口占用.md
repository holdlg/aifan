# [AlmaLinux8] 查看端口占用

```bash
# 查看端口8000是否被占用
lsof -i:8000

# 查看端口占用
netstat -anp | grep 6650

# 安装netstat
yum install net-tool
```

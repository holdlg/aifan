# nohup

```shell
nohup python app.py > /dev/null 2>&1 &

nohup python app.py > nohup.out 2>&1 &

# 0 标准输入
# 1 标准输出
# 2 错误输出

2>&1 错误输出定位到标准输出
nohup python app.py > nohup.out 2>&1 错误输出定位到标准输出，输出到 nohup.out 文件

```
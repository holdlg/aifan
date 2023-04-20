# [Python 包] pip

# pip 升级

```bash
On Linux or macOS:
pip3 install -U pip


On Windows:
python -m pip install --upgrade pip
```

# 切换阿里源

### 改文件,没有文件请新建

linux

```

vi ~/.pip/pip.conf


[global]
index-url = https://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com
```

windows

```

打开 C:\Users\user\pip\pip.ini 

[global]
index-url = https://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com
```

### 配置命令

```bash
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

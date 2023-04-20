# [CentOS8] 编译Python

# python3.10

```bash
# 依赖
yum -y update
yum -y install bzip2-devel expat-devel gdbm-devel \
    ncurses-devel openssl-devel readline-devel \
    sqlite-devel tk-devel xz-devel zlib-devel wget \
    libffi-devel make gcc yum-utils

# 下载解压
cd ~
VERSION=3.10.4
wget https://www.python.org/ftp/python/${VERSION}/Python-${VERSION}.tar.xz
tar Jxf Python-${VERSION}.tar.xz
cd Python-${VERSION}

# 编译安装
./configure --enable-optimizations --prefix=/opt/python310
make
make install

# 测试
python3
pip3

# 软连接
ln -s /opt/python310/bin/python3.10 /usr/bin/python
ln -s /opt/python310/bin/pip3 /usr/bin/pip

# 设置pip国内源
vi ~/.pip/pip.conf

[global]
index-url = https://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com


```

# python3.9

```bash
# 依赖
yum -y update
yum -y install bzip2-devel expat-devel gdbm-devel \
    ncurses-devel openssl-devel readline-devel \
    sqlite-devel tk-devel xz-devel zlib-devel wget \
    libffi-devel make gcc yum-utils

# 下载解压
cd ~
VERSION=3.9.10
wget https://www.python.org/ftp/python/${VERSION}/Python-${VERSION}.tar.xz
tar Jxf Python-${VERSION}.tar.xz
cd Python-${VERSION}

# 编译安装
./configure --enable-optimizations --prefix=/opt/python39
make
make install

# 测试
python3
pip3

# 软连接
ln -s /opt/python39/bin/python3.9 /usr/bin/python
ln -s /opt/python39/bin/pip3 /usr/bin/pip

# 设置pip国内源
vi ~/.pip/pip.conf

[global]
index-url = https://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com


```

# python3.8

```bash
# 依赖
yum -y update
yum -y install bzip2-devel expat-devel gdbm-devel \
    ncurses-devel openssl-devel readline-devel \
    sqlite-devel tk-devel xz-devel zlib-devel wget \
    libffi-devel make gcc yum-utils

# 下载解压
cd ~
VERSION=3.8.12
wget https://www.python.org/ftp/python/${VERSION}/Python-${VERSION}.tar.xz
tar Jxf Python-${VERSION}.tar.xz
cd Python-${VERSION}

# 编译安装
./configure --enable-optimizations --prefix=/opt/python38
make
make install

# 测试
python3
pip3

# 软连接
ln -s /opt/python38/bin/python3.8 /usr/bin/python
ln -s /opt/python38/bin/pip3 /usr/bin/pip
```

fayi

```bash
# 依赖
sudo yum -y update
sudo yum -y install bzip2-devel expat-devel gdbm-devel \
    ncurses-devel openssl-devel readline-devel \
    sqlite-devel tk-devel xz-devel zlib-devel wget \
    libffi-devel make gcc yum-utils

# 下载解压
cd ~
VERSION=3.8.6
wget https://www.python.org/ftp/python/${VERSION}/Python-${VERSION}.tar.xz
tar Jxf Python-${VERSION}.tar.xz
cd Python-${VERSION}

# 编译安装
./configure --enable-optimizations --prefix=/usr/local
make -j `nproc`
make altinstall

# 测试
python3
pip3

# 软连接
ln -s /usr/local/bin/python3.8 /usr/bin/python
ln -s /usr/local/bin/pip3 /usr/bin/pip
```

faer

编译之后，在调用用pulsar-client的时候，提示

> ModuleNotFoundError: No module named '\_lzma'lzma

lzma是python内置的，据说是编译时缺少xz-devel

```bash
# 依赖
sudo yum -y update
sudo yum -y install wget yum-utils gcc openssl-devel bzip2-devel libffi-devel make


# 下载解压
cd ~
wget https://www.python.org/ftp/python/3.8.5/Python-3.8.5.tar.xz
tar Jxf Python-3.8.5.tar.xz
cd Python-3.8.5

# 编译安装
./configure --enable-optimizations --prefix=/usr/local
make -j `nproc`
make install

# 测试
python3
pip3
```

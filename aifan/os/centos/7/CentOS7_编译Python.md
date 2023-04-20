# [CentOS7] 编译Python

1.  编译Python27

```bash
yum -y install zlib*
yum -y install openssl-devel
yum -y install sqlite-devel

./configure --prefix=/usr/local/python27 --enable-optimizations
```

1.  编译Python37

```bash
wget https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tar.xz && \
tar Jxf Python-3.7.4.tar.xz && \
cd Python-3.7.4 && \
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel gcc gcc-c++ zlib zlib-devel libffi-devel gcc kernel-devel kenel-headers make bzip2 && \
./configure --enable-optimizations  && \
make  && \
make install
```

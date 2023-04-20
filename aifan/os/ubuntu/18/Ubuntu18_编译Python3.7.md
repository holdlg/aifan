# [Ubuntu18] 编译Python3.7

# 安装依赖

```bash
sudo apt build-dep python3
```

# 下载Python3.7源码

```bash
wget https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tar.xz

或者，去官网手动下载

https://www.python.org

```

#

# 解压编译

```bash
tar -Jxf Python-3.7.4.tar.xz 

cd Python-3.7.4

./configure --prefix=/usr/local --enable-optimizations

make

# 非root记得用sudo
sudo make install
```

# 小技巧

```bash
# 查看CPU核心数
nproc
4

# 编译的时候使用(4是nproc的结果，也就是CPU核心数量，可以提高编译效力)
make -j4
```

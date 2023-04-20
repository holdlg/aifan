# [Ubuntu20] 编译Python3.8

```bash
sudo apt-get install -y gcc make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev


wget https://www.python.org/ftp/python/3.8.8/Python-3.8.8.tar.xz

tar -Jxf Python-3.8.8.tar.xz 

cd Python-3.8.8

./configure --prefix=/opt/python38 --enable-optimizations

make

# 非root记得用sudo
sudo make install


# 软连接
sudo ln -s /opt/python38/bin/python3.8 /usr/bin/python
sudo ln -s /opt/python38/bin/pip3.8 /usr/bin/pip


# pip ustc源
pip install -i https://mirrors.ustc.edu.cn/pypi/web/simple pip -U
pip config set global.index-url https://mirrors.ustc.edu.cn/pypi/web/simple
```

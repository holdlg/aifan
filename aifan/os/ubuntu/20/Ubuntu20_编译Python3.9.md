# [Ubuntu20] 编译Python3.9

```powershell
sudo apt-get install -y gcc make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev


wget https://www.python.org/ftp/python/3.9.5/Python-3.9.5.tar.xz

tar -Jxf Python-3.9.5.tar.xz 

cd Python-3.9.5

./configure --prefix=/opt/python39 --enable-optimizations

make

# 非root记得用sudo
sudo make install


# 软连接
sudo ln -s /opt/python39/bin/python3.9 /usr/bin/python
sudo ln -s /opt/python39/bin/pip3.9 /usr/bin/pip


# pip ustc源
pip install -i https://mirrors.ustc.edu.cn/pypi/web/simple pip -U
pip config set global.index-url https://mirrors.ustc.edu.cn/pypi/web/simple

# pip huawei
pip install -i https://repo.huaweicloud.com/repository/pypi/simple pip -U
pip config set global.index-url https://repo.huaweicloud.com/repository/pypi/simple

```

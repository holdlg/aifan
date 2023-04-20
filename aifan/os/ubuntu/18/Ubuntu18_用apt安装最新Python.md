# [Ubuntu18] 用apt安装最新Python

```bash
sudo apt update
sudo apt install software-properties-common
sudo -E add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.7
sudo ln -s /usr/bin/python3.7 /usr/bin/python
python --version

```

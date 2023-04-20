# [Ubuntu16] 安装 docker

```bash
# 更新源
sudo apt-get update

# 删除旧的docker
sudo apt-get remove docker docker-engine docker.io

# 安装docker安装依赖工具
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
    
# docker 官方gpg密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 验证密钥安装成功
sudo apt-key fingerprint 0EBFCD88

# 添加docker源
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

# 更新源
sudo apt-get update

# 安装docker
sudo apt-get install docker-ce

# 启动docker
sudo systemctl restart docker

# 验证安装
sudo docker info

# 非root账户运行（需要注销，再登录）
sudo usermod -aG docker <your-user-name>

# 注销
logout
```

# [Ubuntu18] 用apt安装最新nodejs

# 安装最新版本12.x

```bash
sudo apt-get update
sudo apt-get install curl
sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
node -v
npm -v
```

# 安装LTS版本10.x

```bash
sudo apt-get update
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs
node -v
npm -v
```

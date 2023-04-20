# [CentOS8] 安装NodeJS

```bash
curl -O https://nodejs.org/dist/v14.15.1/node-v14.15.1-linux-x64.tar.xz

tar Jxf node-v14.15.1-linux-x64.tar.xz

mv node-v14.15.1-linux-x64 /opt/node

vi $HOME/.bash_profile

PATH=$PATH:/opt/node/bin
```

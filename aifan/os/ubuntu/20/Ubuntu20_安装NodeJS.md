# [Ubuntu20] 安装NodeJS

```shell
wget https://nodejs.org/dist/v14.17.0/node-v14.17.0-linux-x64.tar.xz

tar Jxf node-v14.17.0-linux-x64.tar.xz

mv node-v14.17.0-linux-x64 /opt/node


# 添加环境变量
vi ${PWD}/.profile

export PATH=/opt/node/bin:$PATH

# 生效
source ${PWD}/.profile
```

​

​

npm切换源

```shell
npm config set registry https://registry.npm.taobao.org --global
```

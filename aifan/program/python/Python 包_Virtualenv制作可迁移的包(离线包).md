# [Python 包] Virtualenv制作可迁移的包(离线包)

```
1. 创建无依赖的环境
    virtualenv env --no-site-packages
2. 安装相关包
    pip install -r requirements.txt
3. 启用环境
    source bin/activate
4. 退出环境
    deactivate
5. 修改 ./bin/activate 找到 VIRTUAL_ENV 变量，修改为
    VIRTUAL_ENV = `pwd`
6. 重新定位virtualenv环境
    virtualenv --relocatable ./
7. 复制使用
```

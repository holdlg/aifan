
# [Docker] 国内镜像源

vi /etc/docker/daemon.json

```powershell
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```

## 中科大

```
https://docker.mirrors.ustc.edu.cn/
```

## docker官方中国

```
https://registry.docker-cn.com
```

## 阿里云

**登录阿里云去 控制台->容器镜像服务 -> 镜像加速器  查看地址**

## 重启docker

```powershell
sudo systemctl daemon-reload
sudo systemctl restart docker

# 查看
docker info
```

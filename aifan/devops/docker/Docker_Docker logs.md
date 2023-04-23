# [Docker] Docker logs

## 命令

```bash
docker logs --help

  docker logs [OPTIONS] CONTAINER
  Options:
        --details        显示更多的信息
    -f, --follow         跟踪实时日志
        --since string   显示自某个timestamp之后的日志，或相对时间，如42m（即42分钟）
        --tail string    从日志末尾显示多少行日志， 默认是all
    -t, --timestamps     显示时间戳
        --until string   显示自某个timestamp之前的日志，或相对时间，如42m（即42分钟）
        
# 查看最后200行
docker logs --tail=200 CONTAINER_ID

# 查看最后30分钟
docker logs --since 30m CONTAINER_ID

# 查看时间段
$ docker logs -t --since="2018-02-08T13:23:37" --until "2018-02-09T12:23:37" CONTAINER_ID

```

日志存储位置：/var/lib/docker/containers/\<container\_id>/\<container\_id>-json.log

设置日志文件大小

```bash
vi /etc/docker/daemon.json

{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn"
  ],
  "log-driver":"json-file",
  "log-opts": {"max-size":"50m", "max-file":"10"}
}
```

## 重启

```bash
systemctl daemon-reload

systemctl restart docker
```

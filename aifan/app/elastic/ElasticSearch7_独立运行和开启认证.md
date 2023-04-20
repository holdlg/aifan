# [ElasticSearch7] 独立运行&开启认证

## 独立运行

```bash
# 创建网络，Es,Kibana共享
$ docker network create elastic
# 运行es镜像
$ docker run -d --name elastic --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:tag
```

## 开启认证

```bash
docker exec -it elastic /bin/bash

vi ./config/elasticsearch.yml
# add
xpack.security.enabled: true
# :wq
# exit

docker restart elastic

docker exec -it elastic /bin/bash

cd ./bin

# 自己填写
elasticsearch-setup-passwords interactive

# 自动化生成
elasticsearch-setup-passwords auto


```

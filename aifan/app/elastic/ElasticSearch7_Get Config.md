
# Get Config

## linux config

```bash
# 设置vm.max_map_count永久为最大值

vi /etc/sysctl.conf

vm.max_map_count=262144

# 当前配置生效
sysctl -w vm.max_map_count=262144
```

## get config

```bash
docker run --rm -p 9200:9200 -p 9300:9300 -v /root/elastic/data:/usr/share/elasticsearch/data -it elasticsearch:7.9.3 /bin/bash

cp -rf /usr/share/elasticsearch/config /usr/share/elasticsearch/data/

exit

mv /root/elastic/data/config /root/elastic/

chmod 775 /root/elastic/*

docker run --name elastic -p 9200:9200 -p 9300:9300 -v /root/elastic/data:/usr/share/elasticsearch/data -v /root/elastic/config:/usr/share/elasticsearch/config -d elasticsearch:7.9.3


docker run --restart=always --name elastic -p 9200:9200 -p 9300:9300 -v /root/elastic/data:/usr/share/elasticsearch/data -v /root/elastic/config:/usr/share/elasticsearch/config -d elasticsearch:7.9.3
```

## ubuntu

```bash
docker run --rm -p 9200:9200 -p 9300:9300 -v ${PWD}/elastic/data:/usr/share/elasticsearch/data -it elasticsearch:7.11.1 /bin/bash

cp -rf /usr/share/elasticsearch/config /usr/share/elasticsearch/data/

exit


sudo mv ${PWD}/elastic/data/config ${PWD}/elastic/

sudo chmod 775 ${PWD}/elastic/*

docker run --name elastic -p 9200:9200 -p 9300:9300 -v ${PWD}/elastic/data:/usr/share/elasticsearch/data -v ${PWD}/elastic/config:/usr/share/elasticsearch/config -d elasticsearch:7.11.1

or

docker run --restart=always --name elastic -p 9200:9200 -p 9300:9300 -v ${PWD}/elastic/data:/usr/share/elasticsearch/data -v ${PWD}/elastic/config:/usr/share/elasticsearch/config -d elasticsearch:7.11.1
```

ubuntu

```bash
docker run --rm -p 9200:9200 -p 9300:9300 -v ${PWD}/elastic:/usr/share/temp_es -it elasticsearch:7.11.2 /bin/bash

cp -rf /usr/share/elasticsearch/* /usr/share/temp_es

exit

sudo chmod 775 ${PWD}/elastic/*

docker run --restart=always --name elastic -p 9200:9200 -p 9300:9300 -v ${PWD}/elastic:/usr/share/elasticsearch -d elasticsearch:7.11.2
```

## modify config

```bash
cluster.name: "docker-cluster"
network.host: 0.0.0.0


# custom config
node.name: "es-node-01"
discovery.seed_hosts: ["127.0.0.1", "[::1]"]
cluster.initial_master_nodes: ["es-node-01"]

# 开启跨域访问支持，默认为false
http.cors.enabled: true
# 跨域访问允许的域名地址，(允许所有域名)以上使用正则
http.cors.allow-origin: /.*/
# 安全认证
xpack.security.enabled: true
```

## 集群加快照

```bash


docker run --rm -p 9200:9200 -p 9300:9300 -v ${PWD}/elastic:/usr/share/temp_es -it elasticsearch:7.11.2 /bin/bash

cp -rf /usr/share/elasticsearch /usr/share/temp_es

exit

sudo chmod 775 ${PWD}/elastic/*

docker run --name elastic -p 9200:9200 -p 9300:9300 -v ${PWD}/elastic:/usr/share/elasticsearch -v /mnt/elasticsnapshot:/usr/share/elasticsnapshot -d elasticsearch:7.11.2

or

docker run --restart=always --name elastic -p 9200:9200 -p 9300:9300 -v ${PWD}/elastic:/usr/share/elasticsearch -v /mnt/elasticsnapshot:/usr/share/elasticsnapshot -d elasticsearch:7.11.2

```

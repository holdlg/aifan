# [ElasticSearch7] 单机配置

elasticsearch 7.0.0 新版更新，填个坑

单机部署提示：

error1:

> cluster.initial master nodes] is empty on this node

error:2

> the default discovery settings are unsuitable for production use; at least one of discovery.seed_hosts, discovery.seed_providers, cluster.initial_master_nodes] must be configured

正确配置

vi /usr/share/elasticsearch/config/elasticsearch.yml

```bash
cluster.name: "docker-cluster"
network.host: 0.0.0.0


# custom config
node.name: "esnode01"
discovery.seed_hosts: ["127.0.0.1", "[::1]"]
cluster.initial_master_nodes: ["esnode01"]
# 开启跨域访问支持，默认为false
http.cors.enabled: true
# 跨域访问允许的域名地址，(允许所有域名)以上使用正则
http.cors.allow-origin: /.*/
```

重点是&#x20;

`node.name`

&#x20;和&#x20;

`cluster.initial_master_nodes`

liunx config

```bash
# 设置vm.max_map_count永久为最大值
vi /etc/sysctl.conf
vm.max_map_count=262144

# 当前配置生效
sysctl -w vm.max_map_count=262144
```

docker 安装获取elastic配置步骤

```bash
docker run --rm -p 9200:9200 -p 9300:9300 -v /root/elastic/data:/usr/share/elasticsearch/data -it elasticsearch:7.9.3 /bin/bash

cp -rf /usr/share/elasticsearch/config /usr/share/elasticsearch/data/

exit

mv /root/elastic/data/config /root/elastic/

chmod 775 /root/elastic/*

docker run --name elastic -p 9200:9200 -p 9300:9300 -v /root/elastic/data:/usr/share/elasticsearch/data -v /root/elastic/config:/usr/share/elasticsearch/config -d elasticsearch:7.9.3


docker run --restart=always --name elastic -p 9200:9200 -p 9300:9300 -v /root/elastic/data:/usr/share/elasticsearch/data -v /root/elastic/config:/usr/share/elasticsearch/config -d elasticsearch:7.9.3
```

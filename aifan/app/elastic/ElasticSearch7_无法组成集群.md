
# 无法组成集群

docker ElasticSearch 7.3 多机器无法组成集群

## error1

```bash
{"type": "server", "timestamp": "2019-09-16T11:22:49,904+0000", "level": "WARN", "component": "o.e.c.c.ClusterFormationFailureHelper", "cluster.name": "vkb-es-cluster", "node.name": "esnode-003",  "message": "master not discovered yet, this node has not previously joined a bootstrapped (v7+) cluster, and this node must discover master-eligible nodes [esnode-001, esnode-002, esnode-003] to bootstrap a cluster: have discovered [{esnode-003}{J1EaLd4DSA-V_-tBeMCdPw}{xY86nCO1S6eGiTGXtXWNIQ}{172.17.0.2}{172.17.0.2:9300}{dim}{ml.machine_memory=3954184192, xpack.installed=true, ml.max_open_jobs=20}]; discovery will continue using [192.168.9.52:9300, 192.168.9.53:9300, 192.168.9.54:9300, 192.168.9.55:9300] from hosts providers and [{esnode-003}{J1EaLd4DSA-V_-tBeMCdPw}{xY86nCO1S6eGiTGXtXWNIQ}{172.17.0.2}{172.17.0.2:9300}{dim}{ml.machine_memory=3954184192, xpack.installed=true, ml.max_open_jobs=20}] from last-known cluster state; node term 0, last-accepted version 0 in term 0"  }  
```

如果你用的docker部署多机器集群就会提示这个错误

解决方法

elasticsearch.yml 中添加

network.publish\_host: 192.168.9.52（内网ip）

参考链接：

[官方说明](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-discovery-bootstrap-cluster.html "官方说明")

[elasticsearch中文](https://elasticsearch.cn/question/7877 "elasticsearch中文")

## error2

```bash
error1:
elasticsearch master not discovered yet: have discovered


error2:
Elastic master not discovered yet, this node has not previously joined a bootstrapped (v7+) cluster, and this node must discover master-eligible nodes

error3:
Master not discovered yet, this node has not previously joined a bootstrapped (v7+) cluster
```

部署elasticsearch:7.11.2 集群遇到如上 error。 只因我所有的节点都是复制的同一个 elasticsearch/config,，所以部分uuid相同，无法通信。

解决方法：
重新生成一份，elasticsearch/config 这个目录的文件就行了

## error3

```bash
failed to initialize SSL TrustManager - not permitted to read truststore file
```

因为证书没有读取权限, 解决方法：

```bash
sudo chmod 775 elastic-stack-ca.p12
sudo chmod 775 elastic-certificates.p12

```

## error4

组成集群的 data/nodes 目录不能copy, 必须每个机器单独生成

# [ElasticSearch8] 快速开始

elasticsearch8

```bash
docker network create elastic
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.0.0-beta1
docker run --name es-node01 --net elastic -p 9200:9200 -p 9300:9300 -it docker.elastic.co/elasticsearch/elasticsearch:8.0.0-beta1
```

```bash
docker network create elasticnetwork

docker run -d --name elasticsearch --net elasticnetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:tag

```

kibana8

```bash
docker pull docker.elastic.co/kibana/kibana:8.0.0-beta1
docker run --name kib-01 --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.0.0-beta1

```

config 关闭 https

```bash
cluster.name: "docker-cluster"
network.host: 0.0.0.0

#----------------------- BEGIN SECURITY AUTO CONFIGURATION -----------------------

#
# The following settings, TLS certificates, and keys have been automatically
# generated to configure Elasticsearch security features on 17-05-2022 03:25:11
#
# --------------------------------------------------------------------------------

# Enable security features
xpack.security.enabled: true

xpack.security.enrollment.enabled: true


# Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents

xpack.security.http.ssl:
  enabled: false
  keystore.path: certs/http.p12

# Enable encryption and mutual authentication between cluster nodes

xpack.security.transport.ssl:
  enabled: false
  verification_mode: certificate
  keystore.path: certs/transport.p12

cluster.name: "docker-cluster"
  truststore.path: certs/transport.p12
#----------------------- END SECURITY AUTO CONFIGURATION -------------------------
```

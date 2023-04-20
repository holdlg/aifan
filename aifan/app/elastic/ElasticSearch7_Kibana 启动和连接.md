
# Kibana 启动和连接

## ES8

```bash
docker pull kibana:8.1.2

docker run -d --name kibana -p 5601:5601 kibana:8.1.2

docker cp kibana:/usr/share/kibana/config/kibana.yml ./

vi kibana.yml
修改 http://elasticsearch:9200 为 http://10.0.6.6:9200
添加
elasticsearch.username: "xxx"
elasticsearch.password: "xxx"
设置中文
i18n.locale: "zh-CN"

docker cp kibana.yml kibana:/usr/share/kibana/config/

# 重启kibana容器
docker restart kibana

```

## ES7

```bash

# 启动Kibana
docker run -d --name kibana -p 5601:5601 kibana:7.11.2

# 进入kibana容器
docker exec -it kibana /bin/bash

# 进入目录
cd /usr/share/kibana

vi config/kibana.yml

修改 http://elasticsearch:9200 为 http://10.0.6.6:9200

设置中文
i18n.locale: "zh-CN"

# 保存退出

# 重启kibana容器
docker restart kibana
```

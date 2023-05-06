# nacos



# nacos启用鉴权

nacos version 2.2.2
```bash
docker compose -f example/standalone-derby.yaml up -d
```


```yml
version: "2"
services:
  nacos:
    image: nacos/nacos-server:${NACOS_VERSION}
    container_name: nacos-standalone
    environment:
      - PREFER_HOST_MODE=hostname
      - NACOS_AUTH_SYSTEM_TYPE=nacos
      - NACOS_AUTH_ENABLE=true
      - NACOS_AUTH_TOKEN=MjMyIGJpdHMgd2hpY2ggaXMgbm90IHNlY3VyZSBlbm91Z2ggZm9yIGFueSBKV1QgSE1BQy1TSEEgYWxnb3JpdGhtLiA=
      - NACOS_AUTH_IDENTITY_KEY=nacosaik
      - NACOS_AUTH_IDENTITY_VALUE=bmFjb3NhdXRoaWRrZXk2NjY2ZS55ajViLmNvbQ==
      - MODE=standalone
    volumes:
      - ./standalone-logs/:/home/nacos/logs
    ports:
      - "8848:8848"
      - "9848:9848"
  prometheus:
    container_name: prometheus
    image: prom/prometheus:latest
    volumes:
      - ./prometheus/prometheus-standalone.yaml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"
    depends_on:
      - nacos
    restart: on-failure
  grafana:
    container_name: grafana
    image: grafana/grafana:latest
    ports:
      - 3000:3000
    restart: on-failure
```
# [Pulsar Manager] 安装部署

# 启动pulsar

```bash

docker run -d -it \
    -p 6650:6650 \
    -p 8080:8080 \
    -v pulsardata:/pulsar/data \
    -v pulsarconf:/pulsar/conf \
    --name ps \
    apachepulsar/pulsar:2.7.1 \
    bin/pulsar standalone
```

# 启动pulsar manager

```bash
docker run --name pm -it \
    -p 9527:9527 -p 7750:7750 \
    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \
    --link ps \
    apachepulsar/pulsar-manager:v0.2.0
```

# 注册超级用户

```bash
CSRF_TOKEN=$(curl http://<your_ip>:7750/pulsar-manager/csrf-token)
curl \
    -H "X-XSRF-TOKEN: $CSRF_TOKEN" \
    -H "Cookie: XSRF-TOKEN=$CSRF_TOKEN;" \
    -H 'Content-Type: application/json' \
    -X PUT http://<your_ip>:7750/pulsar-manager/users/superuser \
    -d '{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}'
```

# 登录

http\://\<your\_ip>:9527

admin
apachepulsar


# [Docker] 运行Pulsar

## pulsar

```bash
docker pull apachepulsar/pulsar:2.8.1

// 后台启动加 -d
docker run --name pulsar -it \
    -p 6650:6650 \
    -p 8080:8080 \
    -v $PWD/pulsar/data:/pulsar/data \
    apachepulsar/pulsar:2.8.1 \
    bin/pulsar standalone
   
   
pulsar://10.0.36.62:6650
http://10.0.36.62:8080
http://10.0.36.62:8080/admin/v2/persistent/public/default/my-topic/stats
```

```bash
docker pull apachepulsar/pulsar:2.8.1

// 后台启动加 -d
docker run --name pulsar -it \
    -p 6650:6650 \
    -p 8080:8080 \
    -v $PWD/pulsar/data:/pulsar/data \
    apachepulsar/pulsar:2.8.1 \
    bin/pulsar standalone
   
   
pulsar://10.0.36.62:6650
http://10.0.36.62:8080
http://10.0.36.62:8080/admin/v2/persistent/public/default/my-topic/stats
```

## pulsar-all

```bash
docker pull apachepulsar/pulsar-all:2.8.1

// 后台启动加 -d
docker run --name pulsar-all -it \
   -p 6650:6650 \
   -p 8080:8080 \
   -p 2181:2181 \
   -v $PWD/pulsar/data:/pulsar/data \
   apachepulsar/pulsar-all:2.8.1 \
   bin/pulsar standalone --advertised-address 10.0.36.62
   
   
pulsar://10.0.36.62:6650
http://10.0.36.62:8080
http://10.0.36.62:8080/admin/v2/persistent/public/default/my-topic/stats
```

## pulsar-dashboard

```bash
docker pull apachepulsar/pulsar-dashboard:2.5.1


SERVICE_URL=http://broker.example.com:8080/

// 后台启动加 -d
docker run --name pulsar-dashboard \
  -p 80:80 \
  -e SERVICE_URL=$SERVICE_URL \
  apachepulsar/pulsar-dashboard:2.5.1
  
  
 参考链接: https://pulsar.apache.org/docs/zh-CN/administration-dashboard/
```

## 使用 dashboard

```bash
docker run -it -p 6650:6650  -p 8080:8080 -p 2181:2181    -v $PWD/data:/pulsar/data  -d apachepulsar/pulsar-all:latest bin/pulsar standalone --advertised-address 10.0.36.53

SERVICE_URL=http://10.0.36.53:8080/
docker run --name pulsar-dashboard -p 80:80 -e SERVICE_URL=$SERVICE_URL -d apachepulsar/pulsar-dashboard:latest
```

# pulsar-manager

```powershell
docker pull apachepulsar/pulsar-manager:v0.2.0
docker run -d -it \
    -p 9527:9527 -p 7750:7750 \
    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \
    apachepulsar/pulsar-manager:v0.2.0
    
# 设置密码
CSRF_TOKEN=$(curl http://localhost:7750/pulsar-manager/csrf-token)
curl \
   -H 'X-XSRF-TOKEN: $CSRF_TOKEN' \
   -H 'Cookie: XSRF-TOKEN=$CSRF_TOKEN;' \
   -H "Content-Type: application/json" \
   -X PUT http://localhost:7750/pulsar-manager/users/superuser \
   -d '{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}'


```

# Pulsar_admin

## 查看
```bash
./pulsar-admin tenants list

./pulsar-admin namespaces list public

./pulsar-admin topics list public/default

./pulsar-admin topics stats non-persistent://public/default/ntc-ses-topic
```

## 超时确认策略
```bash
# 消息超时自动确认
# TTL of 2 minutes
./pulsar-admin namespaces set-message-ttl public/default --messageTTL 120

# TTL of 20 minutes
./pulsar-admin namespaces set-message-ttl public/default --messageTTL 1200
```


## 积压策略
```bash
# 2G后清除
pulsar-admin namespaces set-backlog-quota public/default \
--limit 2G \
--policy producer_request_hold

# 1小时后清除
pulsar-admin namespaces set-backlog-quota public/default/persistent://public/default/ntc-ses-topic \
--limitTime 3600 \
--policy producer_request_hold \
--type message_age
```

## tls启动
```bash
docker run --name pulsar -d -p 6651:6651    -p 8443:8443    -v /root/pulsar/data:/pulsar/data   -e PULSAR_PREFIX_brokerServicePortTls=6651   -e PULSAR_PREFIX_webServicePortTls=8443   -e PULSAR_PREFIX_tlsEnabled=true   -e PULSAR_PREFIX_tlsCertificateFilePath=/pulsar/data/my-ca/broker.cert.pem   -e PULSAR_PREFIX_tlsKeyFilePath=/pulsar/data/my-ca/broker.key-pk8.pem   -e PULSAR_PREFIX_tlsTrustCertsFilePath=/pulsar/data/my-ca/certs/ca.cert.pem   apachepulsar/pulsar:2.11.1   sh -c "bin/apply-config-from-env.py conf/standalone.conf && bin/pulsar standalone"
```
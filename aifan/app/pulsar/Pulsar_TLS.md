# [Pulsar] TLS

````bash


# docker pulsar standalone tls 

```bash
docker run --name pulsar  \
  -p 6650:6650  \
  -p 8080:8080  \
  -p 6651:6651  \
  -p 8443:8443  \
  -v /root/pulsar/data:/pulsar/data \
  -e PULSAR_PREFIX_brokerServicePortTls=6651 \
  -e PULSAR_PREFIX_webServicePortTls=8443 \
  -e PULSAR_PREFIX_tlsEnabled=true \
  -e PULSAR_PREFIX_tlsCertificateFilePath=/pulsar/data/my-ca/broker.cert.pem \
  -e PULSAR_PREFIX_tlsKeyFilePath=/pulsar/data/my-ca/broker.key-pk8.pem \
  -e PULSAR_PREFIX_tlsTrustCertsFilePath=/pulsar/data/my-ca/certs/ca.cert.pem \
  apachepulsar/pulsar:2.8.3 \
  sh -c "bin/apply-config-from-env.py conf/standalone.conf && bin/pulsar standalone"
```

- 6651和8443是tls访问端口
- ca证书需要自己生成,官网https://pulsar.apache.org/ 的tls模块有教程
- apply-config-from-env.py是pulsar的脚本
- 对应的配置文件是standalone.conf

# python pulsar-client

## 生产数据
```python

from pulsar import Client

client = Client("pulsar+ssl://broker.example.com:6651/",
                tls_trust_certs_file_path="/pulsar/data/my-ca/certs/ca.cert.pem",
                tls_allow_insecure_connection=False) 
           
producer = client.create_producer('my-topic') 
for i in range(10): 
    producer.send(('Hello-%d' % i).encode('utf-8'))
client.close()
```

## 消费数据

```python

from pulsar import Client

client = Client("pulsar+ssl://broker.example.com:6651/",
                tls_trust_certs_file_path="/pulsar/data/my-ca/certs/ca.cert.pem",
                tls_allow_insecure_connection=False) 
                
consumer = client.subscribe('my-topic', 'my-subscription')

while True:
    msg = consumer.receive()
    try:
        print("Received message '{}' id='{}'".format(msg.data(), msg.message_id()))
        # Acknowledge successful processing of the message
        consumer.acknowledge(msg)
    except Exception:
        # Message failed to be processed
        consumer.negative_acknowledge(msg)

client.close()
```
````

```bash

docker volume create pulsardata
docker volume create pulsarconf

docker run --name pulsar  \
  -p 6651:6651  \
  -p 8443:8443  \
  --mount source=pulsardata,target=/pulsar/data \
  --mount source=pulsarconf,target=/pulsar/conf \
  -e PULSAR_PREFIX_brokerServicePortTls=6651 \
  -e PULSAR_PREFIX_webServicePortTls=8443 \
  -e PULSAR_PREFIX_tlsEnabled=true \
  -e PULSAR_PREFIX_tlsCertificateFilePath=/pulsar/data/my-ca/broker.cert.pem \
  -e PULSAR_PREFIX_tlsKeyFilePath=/pulsar/data/my-ca/broker.key-pk8.pem \
  -e PULSAR_PREFIX_tlsTrustCertsFilePath=/pulsar/data/my-ca/certs/ca.cert.pem \
  apachepulsar/pulsar:2.8.3 \
  sh -c "bin/apply-config-from-env.py conf/standalone.conf && bin/pulsar standalone"
```

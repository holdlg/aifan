# [Pulsar] 运行

```bash
docker run  --name pulsar -d -it \
    -p 6650:6650 \
    -p 8080:8080 \
    -v $PWD/data:/pulsar/data \
    apachepulsar/pulsar:latest \
    bin/pulsar standalone
```

```bash


docker run -it -p 6650:6650  -p 8080:8080 --mount source=pulsardata,target=/pulsar/data --mount source=pulsarconf,target=/pulsar/conf apachepulsar/pulsar:2.9.1 bin/pulsar standalone

docker run -d --name pulsar -p 6650:6650  -p 8080:8080 --mount source=pulsardata,target=/pulsar/data --mount source=pulsarconf,target=/pulsar/conf apachepulsar/pulsar:2.8.3 bin/pulsar standalone



```

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

```bash
docker run --name pulsar2  \
  -p 6651:6651  \
  -p 8443:8443  \
  -v /root/pulsar/data:/pulsar/data \
  -e PULSAR_PREFIX_brokerServicePortTls=6651 \
  -e PULSAR_PREFIX_webServicePortTls=8443 \
  -e PULSAR_PREFIX_tlsEnabled=true \
  -e PULSAR_PREFIX_tlsCertificateFilePath=/pulsar/data/my-ca/broker.cert.pem \
  -e PULSAR_PREFIX_tlsKeyFilePath=/pulsar/data/my-ca/broker.key-pk8.pem \
  -e PULSAR_PREFIX_tlsTrustCertsFilePath=/pulsar/data/my-ca/certs/ca.cert.pem \
  apachepulsar/pulsar:2.10.0 \
  sh -c "bin/apply-config-from-env.py conf/standalone.conf && bin/pulsar standalone"

```

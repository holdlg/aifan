# Harbor
私有镜像库

## 内网安装
- 安装docker
- 下载harbor
- 修改harbor.yml，改hostname为<本机ip>，注释https配置
- ./install.sh安装
- http://<本机ip> 访问
- 默认管理员登录：admin/Harbor12345


## 证书生成, 使用域名

```bash
cd harbor
mkdir certs
cd certs

# 创建所使用的证书

? fir8.com 是自定义证书名,可以是域名IP

openssl genrsa -out ca.key 4096

openssl req -x509 -new -nodes -sha512 -days 3650 \
 -subj "/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=fir8.com" \
 -key ca.key \
 -out ca.crt


openssl genrsa -out fir8.com.key 4096


openssl req -sha512 -new \
    -subj "/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=fir8.com" \
    -key fir8.com.key \
    -out fir8.com.csr
    

cat > v3.ext <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1=fir8.com
DNS.2=hostname
DNS.3=fir8
EOF


openssl x509 -req -sha512 -days 3650 \
    -extfile v3.ext \
    -CA ca.crt -CAkey ca.key -CAcreateserial \
    -in fir8.com.csr \
    -out fir8.com.crt
    
    
openssl x509 -inform PEM -in fir8.com.crt -out fir8.com.cert



# 使用证书
## harbor使用， 与harbor.yml的路径对照
mkdir /data/cert
cp fir8.com.crt /data/cert/
cp fir8.com.key /data/cert/

## docker使用
mkdir -p /etc/docker/certs.d/fir8.com
cp fir8.com.key /etc/docker/certs.d/fir8.com/
cp fir8.com.cert /etc/docker/certs.d/fir8.com/
cp ca.crt /etc/docker/certs.d/fir8.com/

systemctl restart docker
```

# 证书生成，使用IP

```bash
cd harbor
mkdir certs
cd certs

# 创建所使用的证书

? 10.0.36.61 是自定义证书名,可以是域名IP


openssl genrsa -out ca.key 4096

openssl req -x509 -new -nodes -sha512 -days 3650 \
 -subj "/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=10.0.36.61" \
 -key ca.key \
 -out ca.crt


openssl genrsa -out 10.0.36.61.key 4096


openssl req -sha512 -new \
    -subj "/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=10.0.36.61" \
    -key 10.0.36.61.key \
    -out 10.0.36.61.csr
    

cat > v3.ext <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
IP.1=10.0.36.61
DNS.1=hostname
EOF

### 你一定要注意上面[alt_names]里面的写法，IP和DNS, DNS可以写域名
### 写错了最终使用的时候会 x509错误，需要重新生成证书


openssl x509 -req -sha512 -days 3650 \
    -extfile v3.ext \
    -CA ca.crt -CAkey ca.key -CAcreateserial \
    -in 10.0.36.61.csr \
    -out 10.0.36.61.crt
    
    
openssl x509 -inform PEM -in 10.0.36.61.crt -out 10.0.36.61.cert



# harbor使用证书
## harbor使用， 与harbor.yml的路径对照
mkdir /data/cert
cp 10.0.36.61.crt /data/cert/
cp 10.0.36.61.key /data/cert/

## 安装
cd /root/harbor
sh install.sh

## 登录
admin/Harbor12345


# 客户端docker使用（正常情况与harbor不在一个机器上）
mkdir -p /etc/docker/certs.d/10.0.36.61
cp 10.0.36.61.key /etc/docker/certs.d/10.0.36.61/
cp 10.0.36.61.cert /etc/docker/certs.d/10.0.36.61/
cp ca.crt /etc/docker/certs.d/10.0.36.61/

systemctl restart docker



```

# https TLS 证书

## 简版

```sh
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr
openssl x509 -req -in server.csr -out server.crt -signkey server.key -days 3650
```

## 完整版
```sh
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr
openssl genrsa -out ca.key 2048
openssl req -new -key ca.key -out ca.csr
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt
```


## 参考版本
```sh
# 执行生成私钥
openssl genrsa -des3 -out 10.0.35.64.key 2048

# 根据私钥 生成 csr 证书
openssl req -new -key 10.0.35.64.key -out 10.0.35.64.csr
选项Common Name请前填写你的IP地址。
eg: Common Name (e.g. server FQDN or YOUR name) []: 10.0.35.64

# 生成无密码的私钥
openssl rsa -in 10.0.35.64.key -out 10.0.35.64_no_password.key

# 生成有密码的私钥的证书文件 days 3650 为 3650天 可以根据自己的来进行修改
openssl x509 -req -days 3650 -in 10.0.35.64.csr -signkey 10.0.35.64.key -out 10.0.35.64.crt

# 生成无密码的证书
openssl x509 -req -days 3650 -in 10.0.35.64.csr -signkey 10.0.35.64_no_password.key -ou
t 10.0.35.64_no_password.crt
```


## 实例
```sh
openssl genrsa -out 10.0.35.81_server.key 2048
openssl req -new -key 10.0.35.81_server.key -out 10.0.35.81_server.csr
openssl x509 -req -in 10.0.35.81_server.csr -out 10.0.35.81_server.crt -signkey 10.0.35.81_server.key -days 3650
```
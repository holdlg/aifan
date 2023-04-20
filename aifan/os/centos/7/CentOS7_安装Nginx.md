# [CentOS7] 安装Nginx\_副本

vi /etc/yum.repos.d/nginx.repo

模版

```
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

CentOS7

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

问题解决

```bash

vi /etc/nginx/nginx.conf

# 默认用户root
user root;


# nginx 自定义目录
chcon -R -u system_u /usr/share/nginx/html
chcon -R -t usr_t /usr/share/nginx/html


chcon -R -u system_u /root/dam/html
chcon -R -t usr_t /root/dam/html


# 关闭selinux

vi /etc/sysconfig/selinux

SELINUX=enforcing
改为
SELINUX=disabled

设置
setenforce 0
查看
getenforce
```

[阿里云免费ssl证书配置https](https://help.aliyun.com/document_detail/98728.html?spm=5176.2020520163.0.0.7bfb56a7NcXdqr "阿里云免费ssl证书配置https")

```nginx
server {
    listen 443 ssl;   #SSL协议访问端口号为443。此处如未添加ssl，可能会造成Nginx无法启动。
    server_name www.fir8.com;  #将localhost修改为您证书绑定的域名，例如：www.example.com。
    root /usr/share/nginx/html;

    ssl_certificate /etc/pki/nginx/4054540.pem;   #将domain name.pem替换成您证书的文件名。
    ssl_certificate_key /etc/pki/nginx/4054540.key;   #将domain name.key替换成您证书的密钥文件名。
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #使用此加密套件。
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   #使用该协议进行配置。
    ssl_prefer_server_ciphers on;   

    location / {
        root         /usr/share/nginx/html;
        index.html
    }
  
    # 截取路径拼接新地址
    location /vnchttps/ {
        if ($uri ~ /vnchttps/(\d+)/(.*)$) {
            set $port $1;
            set $path $2;
            proxy_pass http://1234.2024.716.2406:$port/$path;
        }
    }
}  
```

```bash
server {
    listen       443 ssl http2 default_server;
    listen       [::]:443 ssl http2 default_server;
    server_name  _;
    root         /root/ark/html;

    ssl_certificate /etc/nginx/cert/ywy.pem;
    ssl_certificate_key /etc/nginx/cert/ywy.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #使用该协议进行配置。
    ssl_prefer_server_ciphers on;

    location / {
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}
```

http配置

```nginx
server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  _;
    root         /usr/share/nginx/html;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}
```

静态下载目录

```bash
server {
    listen       80;          # a customed port

    # download
    autoindex on;               # enable directory listing output
    autoindex_exact_size off;   # output file sizes rounded to kilobytes, megabytes, and gigabytes
    autoindex_localtime on;     # output local times in the directory
    charset utf-8;

    location / {
        root /root/html/;
    }
}
```

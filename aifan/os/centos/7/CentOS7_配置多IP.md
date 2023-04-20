# [CentOS7] 配置多IP

vi /etc/sysconfig/network-sciprt/ifcfg-ens32

```bash
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="none"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens32"
UUID="97988145-37a7-4699-a815-800e134acdfb"
DEVICE="ens32"
ONBOOT="yes"

# 修改MAC地址
MACADDR="00:21:CC:73:AD:2B"

# 第一个IP
IPADDR="192.168.20.125"
PREFIX="24"
GATEWAY="192.168.20.50"
DNS1="1.1.1.1"
DNS2="223.6.6.6"
IPV6_PRIVACY="no"

# 第二个IP
IPADDR1="192.168.10.97"
PREFIX1="24"
```

网络操作

```bash
systemctl restart network
systemctl stop network
systemctl start network
systemctl status network
```

参考链接：&#x20;

[https://linux.cn/article-5127-1.html](https://linux.cn/article-5127-1.html "https://linux.cn/article-5127-1.html")

# [CentOS8] 静态IP设置

打开配置

```bash
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

修改配置, 注意&#x20;

`BOOTPROTO=none`

```bash
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
# BOOTPROTO=dhcp
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=a68447cc-a750-4efb-9800-ea4fddc4a618
DEVICE=ens33
ONBOOT=yes


IPADDR=110.0.36.96
PREFIX=24
GATEWAY=110.0.36.202
DNS1=223.6.6.6
DNS2=1.1.1.1
```

配置生效

```bash
nmcli c reload
nmcli c up ens33
```

查看IP

```bash
ip a
```

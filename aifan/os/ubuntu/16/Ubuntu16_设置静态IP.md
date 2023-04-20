# [Ubuntu16] 设置静态IP

#### 修改配置

sudo vi /etc/network/interfaces

```
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp0s31f6
iface enp0s31f6 inet static

address 192.168.20.123
netmask 255.255.255.0
gateway 192.168.20.50
dns-nameservers 223.5.5.5
dns-nameservers 223.6.6.6
```

配置

`dns-nameservers`

&#x20;重启系统会自动在&#x20;

`/etc/resolvconf/resolv.conf.d/base`

&#x20;生成dns

```
nameserver 223.5.5.5
nameserver 223.6.6.6
```

#### 重启网卡

```bash
sudo /etc/init.d/networking restart
或  （ ifdown 远程连接慎用）
sudo ifdown enp0s31f6 && sudo ifup enp0s31f6
```

#### 重启

有时候重启网络无效，重启大法好。

```bash
init 6
```

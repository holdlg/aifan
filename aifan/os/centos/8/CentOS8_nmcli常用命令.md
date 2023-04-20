# [CentOS8] nmcli常用命令

# 常用命令

查看IP

`nmcli`

重载所有ifcfg或route到connection（不会立即生效）

`nmcli c reload`

立即生效connection，有3种方法

`nmcli c up ethX`

`nmcli d reapply ethX`

`nmcli d connect ethX`

# 详细示例

*   查看IP

`nmcli`

*   创建connection，配置静态IP（等同于配置ifcfg，其中BOOTPROTO=none，并ifup启动）

`nmcli c add type ethernet con-name ethX ifname ethX ipv4.addr 192.168.1.100/24 ipv4.gateway 192.168.1.1 ipv4.method manual`

*   创建connection，配置动态IP（等同于配置ifcfg，其中BOOTPROTO=dhcp，并ifup启动）

`nmcli c add type ethernet con-name ethX ifname ethX ipv4.method auto`

*   修改ip（非交互式）

`nmcli c modify ethX ipv4.addr '192.168.1.100/24`

`nmcli c up ethX`

*   修改ip（交互式）

`nmcli c edit ethX`

`nmcli> goto ipv4.addresses`

`nmcli ipv4.addresses> change`

`Edit 'addresses' value: 192.168.1.100/24`

`Do you also want to set 'ipv4.method' to 'manual'? [yes]: yes`

`nmcli ipv4> save`

`nmcli ipv4> save`

`nmcli ipv4> quit`

*   启用connection（相当于ifup）

`nmcli c up ethX`

*   停止connection（相当于ifdown）

`nmcli c down`

*   删除connection（类似于ifdown并删除ifcfg）

`nmcli c delete ethX`

*   查看connection列表

`nmcli c show`

*   查看connection详细信息

`nmcli c show ethX`

*   重载所有ifcfg或route到connection（不会立即生效）

`nmcli c reload`

*   重载指定ifcfg或route到connection（不会立即生效）

`nmcli c load /etc/sysconfig/network-scripts/ifcfg-ethX`

`nmcli c load /etc/sysconfig/network-scripts/route-ethX`

*   立即生效connection，有3种方法

`nmcli c up ethX`

`nmcli d reapply ethX`

`nmcli d connect ethX`

*   查看device列表

`nmcli d`

*   查看所有device详细信息

`nmcli d show`

*   查看指定device的详细信息

`nmcli d show ethX`

*   激活网卡

`nmcli d connect ethX`

*   关闭无线网络（NM默认启用无线网络）

`nmcli r all off`

*   查看NM纳管状态

`nmcli n`

*   开启NM纳管

`nmcli n on`

*   关闭NM纳管（谨慎执行）

`nmcli n off`

*   监听事件

`nmcli m`

*   查看NM本身状态

`nmcli`

*   检测NM是否在线可用

`nm-online`

作者：Huang\_Chao
链接：

[https://www.jianshu.com/p/bff0c2139ea6](https://www.jianshu.com/p/bff0c2139ea6 "https://www.jianshu.com/p/bff0c2139ea6")

来源：简书

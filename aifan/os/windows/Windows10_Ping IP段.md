# [Windows10] Ping IP段

```bash
for /l %i in (1,1,255) do ping -n 1 -w 3 192.168.0.%i | find /i "ttl" >> ok_ip.log
```

备注：

%i in (1,1,255) ——是遍历主机位从1 \~ 255的所有IP
\-n——ping 的次数
\-w ——timeout时常
192.168.0.%i ——遍历IP 自192.168.0.1 \~ 192.168.0.255的所有IP
\|  ——管道，将前面的结果通过管道输入给后面的命令

>

> ——重定向，将结果写进 ok\_ip.log 这个文件

# [AlmaLinux9] 设置静态IP

```bash
vi /etc/NetworkManager/system-connections/ens33.nmconnection

[connection]
id=ens33
uuid=9b563994-8c93-3dc7-8dc4-762a48817aa3
type=ethernet
autoconnect-priority=-999
interface-name=ens33
timestamp=1658498043

[ethernet]

[ipv4]
address1=10.0.36.75/16,10.0.36.232
dns=223.5.5.5;223.6.6.6;
method=manual
#method=auto

[ipv6]
addr-gen-mode=eui64
method=auto

[proxy]
```

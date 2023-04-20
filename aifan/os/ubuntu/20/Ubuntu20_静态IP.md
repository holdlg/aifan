# [Ubuntu20] 静态IP

sudo vi /etc/netplan/ \*\*.yml

```yaml
# This is the network config written by 'subiquity'
network:
  ethernets:
    ens33:
      dhcp4: false
      dhcp6: false
      addresses: [10.0.36.61/16]
      gateway4: 10.0.36.202
      nameservers:
        addresses: [223.6.6.6,1.1.1.1]
  version: 2
```

sudo netplan apply

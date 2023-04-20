# ubuntu 22 静态 ip

vim /etc/netplan/00-installer-config.yaml

```yml
network:
  ethernets:
    ens33:
      dhcp4: false
      dhcp6: false
      addresses: [10.0.36.61/16]
      gateway4: 10.0.36.202
      nameservers:
        addresses: [223.6.6.6, 1.1.1.1]
  version: 2
```

```yml
network:
  ethernets:
    eth0:
      dhcp4: false
      dhcp6: false
      addresses:
        - 192.168.10.120/24
      optional: true
      routes:
        - to: default
          via: 192.168.10.1
      set-name: eth0
      nameservers:
        addresses:
          - 223.5.5.5
          - 223.6.6.6
        search:
          - localhost
          - local
  version: 2
```

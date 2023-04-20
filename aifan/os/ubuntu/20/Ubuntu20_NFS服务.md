# [Ubuntu20] NFS服务

# 服务端

```bash
# 安装nfs服务
sudo apt install nfs-kernel-server

# 查看nfs支持的协议
sudo cat /proc/fs/nfsd/versions 

# 配置nfs
sudo vi /etc/exports

/mnt/elasticsnapshot 10.0.36.12*(rw,sync,no_subtree_check)

# 重启服务
sudo systemctl restart nfs-kernel-server
# 查看服务状态
sudo systemctl status nfs-kernel-server

```

# 客户端

```bash

# 安装
sudo apt install nfs-common 

# 创建目录
sudo mkdir -p /mnt/elasticsnapshot

# 挂载远程目录到本地
sudo mount -t nfs 10.0.36.120:/mnt/elasticsnapshot /mnt/elasticsnapshot
```

# nfs exports 配置说明

```bash
/mnt/elasticsnapshot  *(rw,root_squash,anonuid=1001,anongid=1001,no_subtree_check,sync)

        rw                       挂载该目录的客户端对该目录具有读写权限；

        root_squash        客户端用户是root用户时，将root用户映射为匿名用户anonymous的权限（默认）

        anonuid              指定匿名用户的uid

        anongid              指定匿名用户的gid

        no_subtree_check    不检查父目录的权限

        sync  修改同步写入内存和磁盘

    另外nfs还有其他配置参数，请根据需求添加：

        ro                             read-only 只读权限

        no_root_squash        不将root用户映射为匿名用户

        all_squash                 不论登录用户是什么，都映射为匿名用户

        secure                       数据通过1024以下的安全TCP/IP端口发送

        insecure                    数据通过1024以上的端口发送

        wdelay                      如果有多个用户要写入，则归组写入

        no_wdelay                如果有多个用户要写入，立即写入，当使用async时，无需此设置

        hide                          共享目录不共享其子目录

        no_hide                    共享目录共享器子目录（默认）

        subtree_check           强制检查父目录权限

        async                        修改暂存于内存中，不直接写入磁盘

```

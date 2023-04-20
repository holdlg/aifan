# [Ubuntu20] 挂载磁盘

```bash
# 磁盘容量及分区状况（不能查看未挂载分区）
df -Th

# 磁盘容量及分区状况（可以查看未挂载分区）
sudo fdisk -l
或
sudo lsblk -f

# /lib 目录大小
du -sh /lib
 
# /lib 子目录大小
du -sh /lib/*


# 操作分区
sudo fdisk /dev/sda

# 格式化分区
sudo mkfs.ext4 /dev/sda3

# 挂载分区
sudo mkdir /mnt/elasticsnapshot
sudo mount /dev/sda3 /mnt/elasticsnapshot
df -Th

# 开机自动化挂载
sudo vi /etc/fstab

/dev/sda3 /mnt/elasticsnapshot ext4 defaults 0 0

# 查看挂载结果
sudo fdisk -Th
或
sudo lsblk -f
```

# 客户端挂载远程nfs

```bash
# 在客户端

sudo vi /etc/fstab

10.0.36.120:/mnt/elasticsnapshot /mnt/elasticsnapshot nfs defaults,_rnetdev 1 1

备注：
第1个1表示 备份文件系统
第2个1表示 从/分区的顺序开始fsck磁盘检测，0表示不检测
_rnetdev表示 主机无法挂载直接跳过，避免无法挂载主机无法启动
```

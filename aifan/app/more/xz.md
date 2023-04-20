# xz

xz 是一个使用 LZMA压缩算法的无损数据压缩文件格式。和gzip与bzip2一样，同样支持多文件压缩，但是约定不能将多于一个的目标文件压缩进同一个档案文件。

相反，xz通常作为一种归档文件自身的压缩格式，例如使用tar或cpioUnix程序创建的归档。xz 在GNU coreutils（版本 7.1 或更新）中被使用。

xz 作为压缩软件包被收录在 Fedora (自Fedora 12起), Arch Linux, FreeBSD、 Slackware Linux、CRUX 和 Funtoo中。

由于 xz 文件格式的压缩率更高，已在 Linux 各发行版中广泛使用。最典型的就是Linux内核，3.12版本的xz压缩包仅72.85MB，解压后能达到518.77MB。

## 压缩
```bash
xz -z [文件名]　　　 不保留原文件压缩
xz -zk [文件名]　　　保留原文件压缩
```

## 解压
```bash
xz -d [文件名]　　　不保留原文件解压
xz -dk [文件名]　　 保留原文件解压
```
# nerdctl


## 安装
```bash

从`https://github.com/containerd/nerdctl/releases` 下载 nerdctl-full-1.1.0-linux-amd64.tar.gz

# 安装
tar Cxzvvf /usr/local nerdctl-full-1.1.0-linux-amd64.tar.gz

# 设置为默认容器运行时，root用户执行，非root参考官方文档
sudo systemctl enable --now containerd
crictl config runtime-endpoint unix:///run/containerd/containerd.sock
crictl config image-endpoint unix:///run/containerd/containerd.sock
```
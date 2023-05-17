# kubernetes 安装与部署

## 修改主机名
```sh
sudo hostnamectl set-hostname ksmain
```

## 关闭交换空间

```sh
sudo swapoff -a
sudo sed -i '/ swap / s/^(.*)$/#1/g' /etc/fstab
```

## 校准时间
```sh
timedatectl set-timezone Asia/Shanghai
```

## 设置容器运行时网络

```sh
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# 设置所需的 sysctl 参数，参数在重新启动后保持不变
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# 应用 sysctl 参数而不重新启动
sudo sysctl --system
```

## 安装容器运行时
```sh
# 安装容器运行时
# download https://github.com/containerd/containerd/releases
tar Cxzvf /usr/local containerd-1.6.21-linux-amd64.tar.gz

# download https://raw.githubusercontent.com/containerd/containerd/main/containerd.service
mkdir -p /usr/local/lib/systemd/system/
mv containerd.service /usr/local/lib/systemd/system/containerd.service

systemctl daemon-reload
systemctl enable --now containerd

# 安装 runc
# download https://github.com/opencontainers/runc/releases
install -m 755 runc.amd64 /usr/local/sbin/runc

# 安装cni plugin
# download https://github.com/containernetworking/plugins/releases
mkdir -p /opt/cni/bin
tar Cxzvf /opt/cni/bin cni-plugins-linux-amd64-v1.2.0.tgz
```

## aliyun安装kubeadm
```sh
apt-get update && apt-get install -y apt-transport-https
curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add - 
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl
```
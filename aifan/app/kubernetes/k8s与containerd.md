
# kubernetes 安装与部署

- 环境almalinux,centos,rockylinux,redhat的9.1版本
- 使用containerd容器运行时
- kubernetes v1.25.4
- root用户


1.设置主机名  
2.禁用防火墙  
3.禁用selinux  
4.禁用swap  
5.同步时间  
5.桥接流量  
6.安装nerdctl-full  
7.确认cgroup驱动默认为systemd  
8.安装kubeadm,kubectl,kubelet  
9.kubeadm创建集群  
10.安装网络插件  

---
## 设置主机名
```sh
# 避免多节点，主机名重复
hostnamectl set-hostname <main>
```

## 禁用防火墙
```sh
systemctl stop firewalld
systemctl disable firewalld
```

## 禁用selinux
```sh
# 和kubelet有关
# 永久禁用
sed -i s/SELINUX=enforcing/SELINUX=disabled/g /etc/selinux/config

# 临时,配置即时生效
setenforce 0 
```

## 禁用swap分区
```sh
# 和kubelet有关
# 永久禁用
sed -i 's/.*swap.*/#&/' /etc/fstab
# sed -i '/swap/d' /etc/fstab

# 临时,配置即时生效
swapoff -a
```

## 同步时间
```sh
# 这个... 不设置也可以
```

## 桥接流量
```sh
# 和流量监控有关
# 转发 IPv4 并让 iptables 看到桥接流量
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

## 安装nerdctl-full
```sh
# nerdctl-full包含nerdctl,containerd,cni等
# nerdctl 替代docker命令
# containerd 容器运行时
# cni 网络实现相关
# https://github.com/containerd/nerdctl
从`https://github.com/containerd/nerdctl/releases` 下载 nerdctl-full-1.0.0-linux-amd64.tar.gz

# 安装
tar Cxzvvf /usr/local nerdctl-full-1.0.0-linux-amd64.tar.gz

# 设置为默认容器运行时，root用户执行，非root参考官方文档
sudo systemctl enable --now containerd
crictl config runtime-endpoint unix:///run/containerd/containerd.sock
crictl config image-endpoint unix:///run/containerd/containerd.sock

# 修改拉取镜像的配置，避免error: RunPodSandbox
vi /etc/containerd/config.toml
找到sandbox_image修改为registry.aliyuncs.com/google_containers/pause:3.8

[plugins]
  ...

  [plugins."io.containerd.grpc.v1.cri"]
    ...
    sandbox_image = "registry.aliyuncs.com/google_containers/pause:3.8"

```

## cni初始化
```sh
# 不初始化，kublet运行时候会有error：NetworkPluginNotReady
# 配置参考 https://github.com/containernetworking/cni
mkdir -p /etc/cni/net.d

cat >/etc/cni/net.d/10-mynet.conf <<EOF
{
	"cniVersion": "0.2.0",
	"name": "mynet",
	"type": "bridge",
	"bridge": "cni0",
	"isGateway": true,
	"ipMasq": true,
	"ipam": {
		"type": "host-local",
		"subnet": "10.22.0.0/16",
		"routes": [
			{ "dst": "0.0.0.0/0" }
		]
	}
}
EOF
$ cat >/etc/cni/net.d/99-loopback.conf <<EOF
{
	"cniVersion": "0.2.0",
	"name": "lo",
	"type": "loopback"
}
EOF
```

## systemd设置
```sh
# 可以跳过，containerd默认是systemd
# 手动设置参考：https://kubernetes.io/zh-cn/docs/setup/production-environment/container-runtimes/
```

## 安装kubeadm,kubectl,kubelet
```sh
# kubeadm：用来初始化集群的指令
# kubelet：在集群中的每个节点上用来启动 Pod 和容器等
# kubectl：用来与集群通信的命令行工具

cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
setenforce 0
yum install -y kubelet kubeadm kubectl
systemctl enable kubelet && systemctl start kubelet

```

## kubeadm创建集群
```sh
# 以下3个命令都行，默认用第一个就行
kubeadm init --image-repository registry.aliyuncs.com/google_containers

kubeadm init --pod-network-cidr 10.244.0.0/16 --image-repository registry.aliyuncs.com/google_containers

kubeadm init --apiserver-advertise-address=10.0.35.12 --control-plane-endpoint=10.0.35.12 --pod-network-cidr 10.244.0.0/16 --image-repository registry.aliyuncs.com/google_containers

# 留意安装成功的提示信息，需要配置KUBECONFIG
export KUBECONFIG=/etc/kubernetes/admin.conf
```

## 安装 Pod 网络附加组件
```sh
flannel和calico都可以，如果是虚拟机可以考虑flannel
flannel： https://github.com/flannel-io/flannel
calico：https://github.com/projectcalico/calico
cilium：https://github.com/cilium/cilium
```

## 查看pods
```sh
kubectl get pods --all-namespaces
```

## 监控kubelet日志
```sh
# 日志监控命令
journalctl -u kubelet -f
```

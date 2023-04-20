# [Ubuntu20] 安装kuberneters

```powershell
# 启用root
sudo passwd root
sudo vi /etc/ssh/sshd_config
添加
PermitRootLogin yes


sudo systemctl restart sshd

# 禁用swap
swapoff -a && sed -i '/swap/d' /etc/fstab

# 修改主机名
sudo hostnamectl set-hostname master

# 安装kuberneters 工具
apt-get update && apt-get install -y apt-transport-https
curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add - 
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl


# 查看依赖镜像
kubeadm config images list

# 下载依赖镜像
kubeadm config images pull

# 查看docker cgroup
docker info | grep -i cgroup

# 修改docker驱动程序为systemd
vim /etc/docker/daemon.json
{
  "exec-opts": ["native.cgroupdriver=systemd"]
}

# 重启docker
systemctl restart docker
# 重新初始化
kubeadm reset 

# 初始化kuberneters集群节点
kubeadm init --apiserver-advertise-address=10.0.26.6 --image-repository=registry.cn-hangzhou.aliyuncs.com/google_container 

# 初始化kuberneters集群节点
kubeadm init \
--apiserver-advertise-address=10.0.26.2 \ 
--image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers/ \ 
--kubernetes-version=v1.23.4 \ 
--service-cidr=10.0.0.0/16 \ 
--pod-network-cidr=10.0.0.0/16

# 安装 Pod 网络附加组件
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml

# 添加flannel文件，如果没有 
vi /run/flannel/subnet.env

FLANNEL_NETWORK=10.244.0.0/16
FLANNEL_SUBNET=10.244.0.1/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=true


# 查看deployment 
kubectl get deployment -A

# 查看service
kubectl get service -A

# 查看Pod
kubectl get pods -n kube-system -o wide

# 查看pod 日志
kubectl describe pod <pod-name> -n kube-system


```

# 安装 dashboard

```powershell
# 安装kuberneters-dashboard
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/aio/deploy/recommended.yaml

# 创建用户
vim admin-user.yaml

apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard

#执行命令
kubectl create -f admin-user.yaml

# 绑定用户关系
vim admin-user-role-binding.yaml

apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard

# 执行命令
kubectl create -f admin-user-role-binding.yaml

# 获取token
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')
```

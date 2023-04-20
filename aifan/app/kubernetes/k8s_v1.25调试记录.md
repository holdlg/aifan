# kubenernetes 1.25

参考链接：https://www.cnblogs.com/weijie0717/p/16795337.html

```
kubeadm：用来初始化集群的指令。

kubelet：在集群中的每个节点上用来启动 Pod 和容器等。

kubectl：用来与集群通信的命令行工具。
```

# 先决条件
- 设置主机名
```
方法一、# vim /etc/hostname    配置相应的主机名

方法二、hostnamectl set-hostname main     
```
- 同步时间
- 关闭防火墙

```
systemctl stop firewalld
systemctl disable firewalld
```
- 禁用selinux
```
sed -i s/SELINUX=enforcing/SELINUX=disabled/g /etc/selinux/config
setenforce 0 
```
- 禁用swap分区
```
# swapoff -a
# sed -i 's/.*swap.*/#&/' /etc/fstab
```


# 安装依赖
```
containerd https://github.com/containerd/containerd/blob/main/docs/getting-started.md
wget https://github.com/containerd/containerd/releases/download/v1.6.10/containerd-1.6.10-linux-amd64.tar.gz
tar Cxzvf /usr/local containerd-1.6.2-linux-amd64.tar.gz


install -m 755 runc.amd64 /usr/local/sbin/runc

mkdir -p /opt/cni/bin
tar Cxzvf /opt/cni/bin cni-plugins-linux-amd64-v1.1.1.tgz
```

## 修改containerd配置
```
containerd  config default > /etc/containerd/config.toml
sed -i 's#k8s.gcr.io#registry.aliyuncs.com/google_containers#g' /etc/containerd/config.toml
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml
```

## 重启containerd
```
systemctl daemon-reload
systemctl enable --now containerd
systemctl restart  containerd
```


## kubeadm 命令
```

kubeadm version

kubeadm config images list
kubeadm config images pull
kubeadm config images pull --image-repository registry.aliyuncs.com/google_containers

kubeadm init
kubeadm init --image-repository registry.aliyuncs.com/google_containers
kubeadm init --pod-network-cidr 10.244.0.0/16 --image-repository registry.aliyuncs.com/google_containers

kubeadm init --apiserver-advertise-address=10.0.35.12 --control-plane-endpoint=10.0.35.12 --pod-network-cidr 10.244.0.0/16 --image-repository registry.aliyuncs.com/google_containers


# 10.244.0.0/16 是 flannel里面的network

kubeadm init \
  --apiserver-advertise-address 10.0.35.11 \
  --image-repository registry.aliyuncs.com/google_containers \
  --kubernetes-version v1.25.4 \
  --service-cidr=10.96.0.0/12 \
  --pod-network-cidr=10.244.0.0/16


export KUBECONFIG=/etc/kubernetes/admin.conf

kubeadm join 10.0.35.235:6443 --token wepgn5.pl2piwdz759vaopl \
        --discovery-token-ca-cert-hash sha256:4813a48675b1dfc3a66617cd773bec6c9fbab6ba3eb2857d163a4f2ea69b5a93 


kubectl -n kube-system get cm kubeadm-config -o yaml
kubectl -n kube-system get cm kubeadm-config -o yaml

kubeadm reset
```

## kubectl命令
```
kubectl version --client
```

## 网络CNI
```
 CNI 插件包括 Calico、flannel、Terway、Weave Net 以及 Contiv

 https://github.com/flannel-io/flannel

 kubectl apply -f kube-flannel.yml
 kubectl get pods --all-namespaces
 hostname -i
```

## err
```
WARN[0000] image connect using default endpoints: [unix:///var/run/dockershim.sock unix:///run/containerd/containerd.sock unix:///run/crio/crio.sock unix:///var/run/cri-dockerd.sock]. As the default settings are now deprecated, you should set the endpoint instead. 
ERRO[0000] unable to determine image API version: rpc error: code = Unavailable desc = connection error: desc = "transport: Error while dialing dial unix /var/run/dockershim.sock: connect: connection refused" 

--- 
crictl config runtime-endpoint unix:///run/containerd/containerd.sock
crictl config image-endpoint unix:///run/containerd/containerd.sock

```

```
Error registering network: failed to acquire lease: node "main" pod cidr not assigned

方法一：
执行kubeadm Init的时候，增加 --pod-network-cidr 10.244.0.0/16参数。

注意，安装Flannel时，

`kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml`

如果yml中的"Network​​": "10.244.0.0/16"和--pod-network-cidr不一样，就修改成一样的。不然可能会使得Node间Cluster IP不通。


方法二：
修改kubeadm-config.yml 添加 podSubnet: "10.244.0.0/16" 
------
apiVersion: v1
data:
  ClusterConfiguration: |
    apiServer:
      extraArgs:
        authorization-mode: Node,RBAC
      timeoutForControlPlane: 4m0s
    apiVersion: kubeadm.k8s.io/v1beta3
    certificatesDir: /etc/kubernetes/pki
    clusterName: kubernetes
    controllerManager: {}
    dns: {}
    etcd:
      local:
        dataDir: /var/lib/etcd
    imageRepository: registry.aliyuncs.com/google_containers
    kind: ClusterConfiguration
    kubernetesVersion: v1.25.4
    networking:
      dnsDomain: cluster.local
      serviceSubnet: 10.96.0.0/12
      podSubnet: 10.244.0.0/16 
    scheduler: {}
kind: ConfigMap
metadata:
  creationTimestamp: "2022-11-18T03:14:44Z"
  name: kubeadm-config
  namespace: kube-system
  resourceVersion: "197"
  uid: 53f3b994-89f3-4694-a7c9-b0b3a38adfed
------
## 重建集群

kubeadm init \
--config=/etc/kubeinstall/kubeadm-init.yaml \
--upload-certs \
--dry-run 

-------------------

方法三：
vim /etc/kubernetes/manifests/kube-controller-manager.yaml
新增：
    - --allocate-node-cidrs=true
    - --cluster-cidr=10.244.0.0/16


---------
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    component: kube-controller-manager
    tier: control-plane
  name: kube-controller-manager
  namespace: kube-system
spec:
  containers:
  - command:
    - kube-controller-manager
    - --authentication-kubeconfig=/etc/kubernetes/controller-manager.conf
    - --authorization-kubeconfig=/etc/kubernetes/controller-manager.conf
    - --bind-address=127.0.0.1
    - --client-ca-file=/etc/kubernetes/pki/ca.crt
    - --cluster-name=kubernetes
    - --cluster-signing-cert-file=/etc/kubernetes/pki/ca.crt
    - --cluster-signing-key-file=/etc/kubernetes/pki/ca.key
    - --controllers=*,bootstrapsigner,tokencleaner
    - --kubeconfig=/etc/kubernetes/controller-manager.conf
    - --leader-elect=true
    - --requestheader-client-ca-file=/etc/kubernetes/pki/front-proxy-ca.crt
    - --root-ca-file=/etc/kubernetes/pki/ca.crt
    - --service-account-private-key-file=/etc/kubernetes/pki/sa.key
    - --use-service-account-credentials=true
    - --allocate-node-cidrs=true
    - --cluster-cidr=10.244.0.0/16
    image: registry.aliyuncs.com/google_containers/kube-controller-manager:v1.25.4
    imagePullPolicy: IfNotPresent
    livenessProbe:
      failureThreshold: 8
      httpGet:
        host: 127.0.0.1
        path: /healthz
        port: 10257
        scheme: HTTPS
      initialDelaySeconds: 10
      periodSeconds: 10
      timeoutSeconds: 15
    name: kube-controller-manager
    resources:
      requests:
        cpu: 200m
    startupProbe:
      failureThreshold: 24
      httpGet:
        host: 127.0.0.1
        path: /healthz
        port: 10257
        scheme: HTTPS
      initialDelaySeconds: 10
      periodSeconds: 10
      timeoutSeconds: 15
    volumeMounts:
    - mountPath: /etc/ssl/certs
      name: ca-certs
      readOnly: true
    - mountPath: /etc/pki
      name: etc-pki
      readOnly: true
    - mountPath: /usr/libexec/kubernetes/kubelet-plugins/volume/exec
      name: flexvolume-dir
    - mountPath: /etc/kubernetes/pki
      name: k8s-certs
      readOnly: true
    - mountPath: /etc/kubernetes/controller-manager.conf
      name: kubeconfig
      readOnly: true
  hostNetwork: true
  priorityClassName: system-node-critical
  securityContext:
    seccompProfile:
      type: RuntimeDefault
  volumes:
  - hostPath:
      path: /etc/ssl/certs
      type: DirectoryOrCreate
    name: ca-certs
  - hostPath:
      path: /etc/pki
      type: DirectoryOrCreate
    name: etc-pki
  - hostPath:
      path: /usr/libexec/kubernetes/kubelet-plugins/volume/exec
      type: DirectoryOrCreate
    name: flexvolume-dir
  - hostPath:
      path: /etc/kubernetes/pki
      type: DirectoryOrCreate
    name: k8s-certs
  - hostPath:
      path: /etc/kubernetes/controller-manager.conf
      type: FileOrCreate
    name: kubeconfig
status: {}
```


```
failed to ensure lease exists, will retry in 7s, error: Get
```

```
reason:NetworkPluginNotReady message:Network plugin returns error: cni plugin not initialized

cni未初始化，执行如下
$ mkdir -p /etc/cni/net.d
$ cat >/etc/cni/net.d/10-mynet.conf <<EOF
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


```
RunPodSandbox from runtime service failed" err="rpc error: code = DeadlineExceeded desc = failed to get sandbox image \"k8s.gcr.io/pause:3.6\": failed to pull image \"k8s.gcr.io/pause:3.6\": failed to pull and u

# 修改containerd容器的配置
vi /etc/containerd/config.toml
```


```
Nov 24 16:00:55 main.adks.co kubelet[1323808]: E1124 16:00:55.242325 1323808 kuberuntime_manager.go:772] "CreatePodSandbox for pod failed" err="rpc error: code = Unknown desc = failed to setup network for sandbox \"b34f120fcbb4d95069458d4154f56ba168d9b2b9ecfbd1df989d07a0b9ddda9e\": plugin type=\"flannel\" failed (add): failed to delegate add: failed to set bridge addr: \"cni0\" already has an IP address different from 10.244.0.1/24" pod="kube-system/coredns-c676cc86f-qlt6v"
Nov 24 16:00:55 main.adks.co kubelet[1323808]: E1124 16:00:55.242475 1323808 pod_workers.go:965] "Error syncing pod, skipping" err="failed to \"CreatePodSandbox\" for \"coredns-c676cc86f-qlt6v_kube-system(d5c90a1e-0b95-4d40-af2d-4aa080a69942)\" with CreatePodSandboxError: \"Failed to create sandbox for pod \\\"coredns-c676cc86f-qlt6v_kube-system(d5c90a1e-0b95-4d40-af2d-4aa080a69942)\\\": rpc error: code = Unknown desc = failed to setup network for sandbox \\\"b34f120fcbb4d95069458d4154f56ba168d9b2b9ecfbd1df989d07a0b9ddda9e\\\": plugin type=\\\"flannel\\\" failed (add): failed to delegate add: failed to set bridge addr: \\\"cni0\\\" already has an IP address different from 10.244.0.1/24\"" pod="kube-system/coredns-c676cc86f-qlt6v" podUID=d5c90a1e-0b95-4d40-af2d-4aa080a69942

# 网桥cni0已存在，删除即可
CreatePodSandbox for pod failed
Error syncing pod, skippin
CreatePodSandboxError
failed to set bridge addr: cni0 already has an IP address different from

# 执行以下命令
ip link del cni0
```


```
E1125 15:50:17.935457    8238 remote_runtime.go:625] 

"ContainerStatus from runtime service failed" err="rpc error: code = NotFound desc = an error occurred when try to find container \"tea-gitea-0\": 


not found containerID= FATA[0000] rpc error: code = NotFound desc = an error occurred when try to find container tea-gitea-0: not found 

没有pv,sc

```

```
mkdir: cannot create directory ‘/bitnami/postgresql/data’: Permission denied

由于Bitnami PostgreSQL 容器是非root 容器，因此id 为1001 的用户需要在您挂载的本地文件夹中具有写入权限。

sudo chown -R 1001:1001 /postgresql
```
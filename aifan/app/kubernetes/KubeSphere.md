# KubeSphere

## 安装kubsphere
```bash
# 创建配置
./kk create config --with-kubernetes --with-kubesphere -f config-cluster.yaml

# 创建集群
./kk create cluster -f config-cluster.yaml

# 删除集群
./kk delete cluster -f config-cluster.yaml
```

## AlamLinux安装kubesphere

```bash
yum install tar

export KKZONE=cn

curl -sfL https://get-kk.kubesphere.io | VERSION=v2.0.0 sh -

chmod +x kk

./kk create cluster --with-kubernetes v1.21.5 --with-kubesphere v3.2.1

```

## 添加工作节点

```bash
./kk create config --from-cluster

sample.yml
···
spec:
  hosts:
  - {name: master1, address: 192.168.0.3, internalAddress: 192.168.0.3, user: root, password: Qcloud@123}
  - {name: node1, address: 192.168.0.4, internalAddress: 192.168.0.4, user: root, password: Qcloud@123}
  - {name: node2, address: 192.168.0.5, internalAddress: 192.168.0.5, user: root, password: Qcloud@123}
  roleGroups:
    etcd:
    - master1
    master:
    - master1
    worker:
    - node1
    - node2
···


./kk add nodes -f sample.yaml


```

## Bug

```bash
error: localhost.localdomain: conntrack is required.

yum install conntrack-tools

```


## 空间与项目

```
flowchart LR
  a(admin/默认管理kubeSphere) --> b(user-manager/管理平台所有用户)
  b(user-manager/管理平台所有用户) --> c(ws-manager/创建空间)
  b(user-manager/管理平台所有用户) --> d(ws-admin/管理空间)
  b(user-manager/管理平台所有用户) --> e(project-admin/创建和管理项目)
  b(user-manager/管理平台所有用户) --> f(project-regular/项目的常规操作)
```

```
flowchart TB
 a(安装kubesphere) --> a1(登录admin)
 --> b(创建平台用户/user-manager) --> b1(登录user-manager) --> 
c(创建4个用户) --> c1(ws-manager/创建空间) --> d(登录ws-manager创建空间,设置ws-admin为空间管理员)
c(创建4个用户) --> c2(ws-admin/管理空间) --> e(登录ws-admin管理空间)
--> e1(邀请project-admin和project-regular加入空间)
c(创建4个用户) --> c3(project-admin/创建和管理项目) --> f(登录project-admin创建项目)
 --> f1(邀请project-regular为项目操作员)
c(创建4个用户) --> c4(project-regular/项目的常规操作) --> g(登录project-regular创建应用)


```

```
title Bug 9999 red
title 测试 9999 blue

```

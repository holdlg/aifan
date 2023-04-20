# 安装ECK

```powershell
# 安装
kubectl create -f https://download.elastic.co/downloads/eck/2.0.0/crds.yaml
kubectl apply -f https://download.elastic.co/downloads/eck/2.0.0/operator.yaml

# 查看operator 日志输出
kubectl -n elastic-system logs -f statefulset.apps/elastic-operator

```

参考链接：[https://www.elastic.co/guide/en/cloud-on-k8s/current/k8s-quickstart.html](https://www.elastic.co/guide/en/cloud-on-k8s/current/k8s-quickstart.html "https://www.elastic.co/guide/en/cloud-on-k8s/current/k8s-quickstart.html")

# 部署elastic

无存储部署

```yaml
cat <<EOF | kubectl apply -f -
apiVersion: elasticsearch.k8s.elastic.co/v1
kind: Elasticsearch
metadata:
  name: quickstart
spec:
  version: 8.0.0
  nodeSets:
  - name: data
    count: 3
    podTemplate:
      spec:
        volumes:
        - name: elasticsearch-data
          emptyDir: {}
EOF
```

```yaml
cat <<EOF | kubectl apply -f -
apiVersion: elasticsearch.k8s.elastic.co/v1
kind: Elasticsearch
metadata:
  name: quickstart
spec:
  version: 8.0.0
  nodeSets:
  - name: default
    count: 3
    config:
      node.store.allow_mmap: false

apiVersion: v1
kind: PersistentVolume
metadata:
  name: elasticsearch-data-quickstart-es-pv
spec:
  capacity:
    storage: 5Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /tmp
EOF
```

pv & pvc

```powershell
kubectl get pvc

kubectl describe pvc elasticsearch-data-quickstart-es-default-0

kubectl get pvc elasticsearch-data-quickstart-es-default-0 -o yaml


```

svc

```powershell
 kubectl get svc
 
 kubectl edit svc quickstart-es-http
```

# BUG

```powershell
# 异常信息
pod has unbound immediate PersistentVolumeClaims.

# 原因，没有可用的pv
```

解决方法

```powershell
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: PersistentVolume
metadata:
  name: elasticsearch-data-quickstart-es-pv
spec:
  capacity:
    storage: 5Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /tmp
EOF
```

kubectl get pv elasticsearch-data-quickstart-es-pv -o yaml

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  annotations:
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"v1","kind":"PersistentVolume","metadata":{"annotations":{},"name":"elasticsearch-data-quickstart-es-pv"},"spec":{"accessModes":["ReadWriteOnce"],"capacity":{"storage":"5Gi"},"hostPath":{"path":"/tmp"},"volumeMode":"Filesystem"}}
    pv.kubernetes.io/bound-by-controller: "yes"
  creationTimestamp: "2022-02-28T06:20:53Z"
  finalizers:
  - kubernetes.io/pv-protection
  name: elasticsearch-data-quickstart-es-pv
  resourceVersion: "710107"
  uid: e9d11ab4-532d-459b-97d9-f16ab53c5ccc
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 5Gi
  claimRef:
    apiVersion: v1
    kind: PersistentVolumeClaim
    name: elasticsearch-data-quickstart-es-default-0
    namespace: default
    resourceVersion: "100530"
    uid: 8da4ce7d-04d3-491c-ae22-71500f626c31
  hostPath:
    path: /tmp
    type: ""
  persistentVolumeReclaimPolicy: Retain
  volumeMode: Filesystem
status:
  phase: Released
```

# 卸载ECK

```powershell
# 移除命名空间和资源
kubectl get namespaces --no-headers -o custom-columns=:metadata.name \
  | xargs -n1 kubectl delete elastic --all -n
  
# 删除yaml
kubectl delete -f https://download.elastic.co/downloads/eck/2.0.0/operator.yaml
kubectl delete -f https://download.elastic.co/downloads/eck/2.0.0/crds.yaml

```

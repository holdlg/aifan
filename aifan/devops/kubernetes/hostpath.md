
# pod挂载
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: gitea-pd
spec:
  containers:
  - image: registry.k8s.io/test-webserver
    name: test-container
    volumeMounts:
    - mountPath: /gitea-pd
      name: gitea-volume
  volumes:
  - name: gitea-volume
    hostPath:
      # 宿主上目录位置
      path: /data/gitea
      # 此字段为可选
      type: Directory
```


# sc
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-tea-sc
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
```


# pv
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: tea-pv
  labels:
    type: local
spec:
  storageClassName: local-tea-sc
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/data/gitea"
```



##
```shell
helm repo add gitea https://dl.gitea.io/charts
helm repo update
helm install gitea gitea/gitea
```

## 

```shell
helm repo add stable https://mirror.azure.cn/kubernetes/charts					# 微软仓库
helm repo add aliyuncs https://apphub.aliyuncs.com/charts								# 阿里云仓库
helm repo update
```

##
```shell
helm show values gitea/gitea > values.yaml
helm show readme gitea/gitea > README.md

# 使用自定义的配置文件 values.yaml
helm install gitea -f values.yaml gitea/gitea
```
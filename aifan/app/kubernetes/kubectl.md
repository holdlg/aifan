# kubectl 命令

```shell
kubectl -h

kubectl options

kubectl config view
kubectl api-versions

kubectl run


kubectl get all

kubectl get nodes
kubectl get pods
kubectl get pods --all-namespaces
kubectl get pv
kubectl get pvc
kubectl get sc

kubectl get svc
kubectl get service

kubectl get deploy
kubectl get deployments  
kubectl get deployments <deployment_name>
kubectl get deployments <deployment_name> -o yaml > /path/deployment_config.yaml


kubectl --namespace default port-forward svc/gitea-http 3000:3000



kubectl describe pod gitea-0
kubectl describe pvc gitea-0

kubectl exec
kubectl logs <pod-name>
kubectl logs <pod-name> --previous

kubectl expose deploy
kubectl expose pod gitea-0 --name=gitea-svc --type=NodePort --port=3000 --target-port=3000
kubectl expose pod gitea-0 --name=gitea-out --type=NodePort --port=3000 --target-port=3000

kubectl delete

# 节点亲和度
kubectl describe node|grep -E "Name:|Taints:"
kubectl describe node main |grep Taints

kubectl taint nodes main key1=value1:NoSchedule-

kubectl taint nodes main node-role.kubernetes.io/master-

##
kubectl cluster-info

## kind 类型
# 受命名空间约束
kubectl api-resources -o wide --namespaced=true
# 不受命名空间约束
kubectl api-resources -o wide --namespaced=true

```
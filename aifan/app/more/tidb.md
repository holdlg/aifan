# 本机模拟集群安装

```bash
# 安装tiup
curl --proto '=https' --tlsv1.2 -sSf https://tiup-mirrors.pingcap.com/install.sh | sh

# tipu生效
source ${your_shell_profile}

# 安装集群
tiup cluster

# 必要时升级集群
tiup update --self && tiup update cluster

# 修改ssh
- 修改 /etc/ssh/sshd_config 将 MaxSessions 调至 20
- systemctl restart sshd

```

配置文件topo.yaml
```yaml
# # Global variables are applied to all deployments and used as the default value of
# # the deployments if a specific deployment value is missing.
global:
 user: "tidb"
 ssh_port: 22
 deploy_dir: "/tidb-deploy"
 data_dir: "/tidb-data"

# # Monitored variables are applied to all the machines.
monitored:
 node_exporter_port: 9100
 blackbox_exporter_port: 9115

server_configs:
 tidb:
   log.slow-threshold: 300
 tikv:
   readpool.storage.use-unified-pool: false
   readpool.coprocessor.use-unified-pool: true
 pd:
   replication.enable-placement-rules: true
   replication.location-labels: ["host"]
 tiflash:
   logger.level: "info"

pd_servers:
 - host: 10.0.1.1

tidb_servers:
 - host: 10.0.1.1

tikv_servers:
 - host: 10.0.1.1
   port: 20160
   status_port: 20180
   config:
     server.labels: { host: "logic-host-1" }

 - host: 10.0.1.1
   port: 20161
   status_port: 20181
   config:
     server.labels: { host: "logic-host-2" }

 - host: 10.0.1.1
   port: 20162
   status_port: 20182
   config:
     server.labels: { host: "logic-host-3" }

tiflash_servers:
 - host: 10.0.1.1

monitoring_servers:
 - host: 10.0.1.1

grafana_servers:
 - host: 10.0.1.1
```


```bash
# 执行集群命令
tiup cluster deploy <cluster-name> <tidb-version> ./topo.yaml --user root -p
tiup cluster deploy JQTiDBDev v6.2.0 ./topo.yaml --user root -p

# 启动集群
tiup cluster start <cluster-name>
tiup cluster start JQTiDBDev
# 重启集群
tiup cluster restart <cluster-name>
# 停止集群
tiup cluster stop <cluster-name>
# 销毁集群
tiup cluster destroy <cluster-name>
```
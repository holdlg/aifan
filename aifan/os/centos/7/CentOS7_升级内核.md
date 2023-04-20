# [CentOS7] 升级内核\_副本

#### 导入key

```bash
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
```

#### 添加源

```bash
yum install -y http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm
```

#### 安装当前最新内核

```bash
yum --enablerepo=elrepo-kernel install -y kernel-ml
```

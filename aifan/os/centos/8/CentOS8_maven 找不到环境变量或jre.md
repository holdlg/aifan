# [CentOS8] maven 找不到环境变量或jre

bug

> No compiler is provided in this environment. Perhaps you are running on a JRE rather than a JDK?

因为没有安装 

`java-1.8.0-openjdk-devel`

解决方法：

```bash
yum install java-1.8.0-openjdk
yum install java-1.8.0-openjdk-devel
```

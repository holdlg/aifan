# [CentOS8] maven 安装

```bash
# 下载
cd /opt
wget https://www-eu.apache.org/dist/maven/maven-3/3.6.2/binaries/apache-maven-3.6.2-bin.tar.gz

# 解压
tar xzf apache-maven-3.6.2-bin.tar.gz
mv apache-maven-3.6.2 maven

# 添加环境变量
vi /etc/profile.d/maven.sh

export M2_HOME=/opt/maven
export PATH=${M2_HOME}/bin:${PATH}

# 环境变量生效
source /etc/profile.d/maven.sh

# 查看
mvn -version
```

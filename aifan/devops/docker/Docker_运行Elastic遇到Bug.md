
# [Docker] 运行Elastic遇到Bug

## 问题描述

docker运行 elasticsearch6.2.4 闪退/秒退的

## 解决方法

我遇到的是目录没有写权限的问题：

执行

```bash
docker run --name elastic -p 9200:9200 -p 9300:9300 -v /root/DB/elastic:/usr/share/elasticsearch/data -d elasticsearch:6.2.4
```

闪退/秒退。

**原因是docker容器对/root/DB/elastic 目录没有写权限，修改目录权限**

执行

```bash
chmod 777 /root/DB/elastic
```

然后在执行 docker run 即可。

***

以下是解决过程

移除 -d 执行

```bash
docker run --name elastic -p 9200:9200 -p 9300:9300 -v /root/DB/elastic:/usr/share/elasticsearch/data elasticsearch:6.2.4
```

有以下Error：

```java
[2018-06-11T07:48:01,441][WARN ][o.e.b.ElasticsearchUncaughtExceptionHandler] [] uncaught exception in thread [main]
org.elasticsearch.bootstrap.StartupException: java.lang.IllegalStateException: Failed to create node environment
at org.elasticsearch.bootstrap.Elasticsearch.init(Elasticsearch.java:125) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Elasticsearch.execute(Elasticsearch.java:112) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.cli.EnvironmentAwareCommand.execute(EnvironmentAwareCommand.java:86) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.cli.Command.mainWithoutErrorHandling(Command.java:124) ~[elasticsearch-cli-6.2.4.jar:6.2.4]
at org.elasticsearch.cli.Command.main(Command.java:90) ~[elasticsearch-cli-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.java:92) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.java:85) ~[elasticsearch-6.2.4.jar:6.2.4]
Caused by: java.lang.IllegalStateException: Failed to create node environment
at org.elasticsearch.node.Node.(Node.java:267) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.node.Node.(Node.java:246) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Bootstrap$5.(Bootstrap.java:213) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Bootstrap.setup(Bootstrap.java:213) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Bootstrap.init(Bootstrap.java:323) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Elasticsearch.init(Elasticsearch.java:121) ~[elasticsearch-6.2.4.jar:6.2.4]
... 6 more
Caused by: java.nio.file.AccessDeniedException: /usr/share/elasticsearch/data/nodes
at sun.nio.fs.UnixException.translateToIOException(UnixException.java:84) ~[?:?]
at sun.nio.fs.UnixException.rethrowAsIOException(UnixException.java:102) ~[?:?]
at sun.nio.fs.UnixException.rethrowAsIOException(UnixException.java:107) ~[?:?]
at sun.nio.fs.UnixFileSystemProvider.createDirectory(UnixFileSystemProvider.java:384) ~[?:?]
at java.nio.file.Files.createDirectory(Files.java:674) ~[?:1.8.0_161]
at java.nio.file.Files.createAndCheckIsDirectory(Files.java:781) ~[?:1.8.0_161]
at java.nio.file.Files.createDirectories(Files.java:767) ~[?:1.8.0_161]
at org.elasticsearch.env.NodeEnvironment.(NodeEnvironment.java:204) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.node.Node.(Node.java:264) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.node.Node.(Node.java:246) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Bootstrap$5.(Bootstrap.java:213) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Bootstrap.setup(Bootstrap.java:213) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Bootstrap.init(Bootstrap.java:323) ~[elasticsearch-6.2.4.jar:6.2.4]
at org.elasticsearch.bootstrap.Elasticsearch.init(Elasticsearch.java:121) ~[elasticsearch-6.2.4.jar:6.2.4]
... 6 more
```

不能创建nodes， 添加目录权限，再添加 -d 就可以了。

***

网上还有一种方法，我没有测试

执行

```bash
chown -R 1000:1000 /root/DB/elastic
```


# [Docker] 命令

记录常用的docker命令

## 同步镜像

```bash
docker pull <package_name>:<version>
```

## 查看已有的镜像

```bash
docker images
```

## 创建并进入容器

```bash
docker run -it <container name> /bin/bash
```

## 查看运行的容器

```bash
docker ps -a
```

## 停止运行的容器

```bash
docker stop <container name>
```

## 镜像重命名

```
docker tag IMAGEID(镜像id) REPOSITORY:TAG（仓库：标签）

举例：
docker tag 7cb69da7148d elastic:6.2.4
```

## 提交镜像

```bash
docker push REPOSITORY:TAG（仓库：标签）
```

## 从dockerfile构建镜像

```bash
docker build -t REPOSITORY:TAG（仓库：标签） ./path
```

## Dockerfile 参数使用

- FROM
  - 指定基础镜像，所有构建的镜像都必须有一个基础镜像，且 FROM 命令必须是 Dockerfile 的第一个命令
  - `FROM <image> [AS <name>]` 指定从一个镜像构建起一个新的镜像名字
  - `FROM <image>[:<tag>] [AS <name>]` 指定镜像的版本 Tag
  - 示例：`FROM mysql:5.0 AS database`

- MAINTAINER
  - 镜像维护人的信息
  - `MAINTAINER <name>`
  - 示例：`MAINTAINER Jartto Jartto@qq.com`

- RUN
  - 构建镜像时要执行的命令
  - `RUN <command>`
  - 示例：`RUN ["executable", "param1", "param2"]`

- ADD
  - 将本地的文件添加复制到容器中去，压缩包会解压，可以访问网络上的文件，会自动下载
  - `ADD <src> <dest>`
  - 示例：`ADD *.js /app` 添加 js 文件到容器中的 app 目录下
  - 示例：`ADD ./*.sh /app/`  添加 sh 文件到/app目录下
  - 示例：`ADD ./*.* /app/` 添加所有带后缀的文件到/app目录下
  - 示例：`ADD ./* /app/` 添加所有不带后缀的文件到/app目录下
  - 示例：`ADD ./ /app/` 添加所有文件到/app目录下

- COPY
  - 功能和 ADD 一样，只是复制，不会解压或者下载文件

- CMD
  - 启动容器后执行的命令，和 RUN 不一样，RUN 是在构建镜像是要运行的命令
  - 当使用 `docker run` 运行容器的时候，这个可以在命令行被覆盖
  - 示例：`CMD ["executable", "param1", "param2"]`

- ENTRYPOINT
  - 也是执行命令，和 CMD 一样，只是这个命令不会被命令行覆盖
  - `ENTRYPOINT ["executable", "param1", "param2"]`
  - 示例：`ENTRYPOINT ["donnet", "myapp.dll"]`

- LABEL：为镜像添加元数据，key-value 形式
  - `LABEL <key>=<value> <key>=<value> ...`
  - 示例：`LABEL version="1.0" description="这是一个web应用"`

- ENV：设置环境变量，有些容器运行时会需要某些环境变量
  - `ENV <key> <value>` 一次设置一个环境变量
  - `ENV <key>=<value> <key>=<value> <key>=<value>` 设置多个环境变量
  - 示例：`ENV JAVA_HOME /usr/java1.8/`

- EXPOSE：暴露对外的端口（容器内部程序的端口，虽然会和宿主机的一样，但是其实是两个端口）
  - `EXPOSE <port>`
  - 示例：`EXPOSE 80`
  - 容器运行时，需要用 `-p` 映射外部端口才能访问到容器内的端口

- VOLUME：指定数据持久化的目录，官方语言叫做挂载
  - `VOLUME /var/log` 指定容器中需要被挂载的目录，会把这个目录映射到宿主机的一个随机目录上，实现数据的持久化和同步。
  - `VOLUME ["/var/log","/var/test".....]` 指定容器中多个需要被挂载的目录，会把这些目录映射到宿主机的多个随机目录上，实现数据的持久化和同步
  - `VOLUME /var/data var/log` 指定容器中的 var/log 目录挂载到宿主机上的 /var/data 目录，这种形式可以手动指定宿主机上的目录

- WORKDIR：设置工作目录，设置之后 ，RUN、CMD、COPY、ADD 的工作目录都会同步变更
  - `WORKDIR <path>`
  - 示例：`WORKDIR /app/test`


- USER：指定运行命令时所使用的用户，为了安全和权限起见，根据要执行的命令选择不同用户
  - `USER <user>:[<group>]`
  - 示例：`USER test`



- ARG：设置构建镜像是要传递的参数
  - `ARG <name>[=<value>]`
  - `ARG name=sss`
# go module

```sh
# 查看帮助
go help mod

# 初始化go.mod
go mod init

# 添加有用依赖，删除不用的依赖
go mod tidy
```

```sh
Usage:

        go mod <command> [arguments]

The commands are:

        download    download modules to local cache
        edit        edit go.mod from tools or scripts
        graph       print module requirement graph
        init        initialize new module in current directory
        tidy        add missing and remove unused modules
        vendor      make vendored copy of dependencies
        verify      verify dependencies have expected content
        why         explain why packages or modules are needed
```
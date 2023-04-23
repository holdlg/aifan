# Go build

- Mac下编译Linux, Windows平台的64位可执行程序：
```shell
$ go env -w CGO_ENABLED=0 GOOS=linux GOARCH=amd64
$ go env -w CGO_ENABLED=0 GOOS=windows GOARCH=amd64
```


- Linux下编译Mac, Windows平台的64位可执行程序：
```shell
$ go env -w CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 
$ go env -w CGO_ENABLED=0 GOOS=windows GOARCH=amd64 
```


- Windows下编译Mac, Linux平台的64位可执行程序：
```shell
$ go env -w CGO_ENABLED=0 GOOS=darwin3 GOARCH=amd64 
$ go env -w CGO_ENABLED=0 GOOS=linux GOARCH=amd64 
```
# go slog

slog output to file
exp/slog 输入日志内容到日志文件

```go
package main

import (
	"fmt"
	"io"
	"os"
	"path/filepath"

	"golang.org/x/exp/slog"
)

func main() {

	flog, err := os.OpenFile(filepath.Join("log.txt"), os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		panic(fmt.Errorf("error opening file: %v", err))
	}

	// 输出到控制台
	// log := slog.New(slog.NewTextHandler(os.Stdout))
	// 输出到文件
	// log := slog.New(slog.NewTextHandler(flog))
	// 输出到控制台和文件
	log := slog.New(slog.NewTextHandler(io.MultiWriter(os.Stdout, flog)))
	log.Info("Hello world")

	fakeErr := os.ErrNotExist
	log.Error("something went wrong", fakeErr, "file", "/tmp/abc.txt")
}

```

# toml文件读取


## config.toml
```toml
version = 2
name = "go-toml"
jwtSecret = "L14jD;5wD@=xD"
tags = ["go", "toml"]
pgLink = "host=10.0.22.22 user=postgres password=postgres dbname=abc port=5432 sslmode=disable TimeZone=Asia/Shanghai"
pgAmsLink = "host=10.0.22.22 user=postgres password=postgres dbname=def port=5432 sslmode=disable TimeZone=Asia/Shanghai"
```

```go
package config

import (
	"fmt"
	"os"

	"github.com/pelletier/go-toml/v2"
)

type MyConfig struct {
	Version   int
	Name      string
	JwtSecret string
	Tags      []string
	PgLink    string
	PgAmsLink string
}

func ReadConfig() MyConfig {
	var cfg MyConfig
	workingDir, _ := os.Getwd()
	fmt.Println(workingDir)
	content, err2 := os.ReadFile(workingDir + "/config.toml")
	if err2 != nil {
		panic(err2)
	}
	err := toml.Unmarshal([]byte(content), &cfg)
	if err != nil {
		panic(err)
	}
	fmt.Println("version:", cfg.Version)
	fmt.Println("name:", cfg.Name)
	fmt.Println("JwtSecret:", cfg.JwtSecret)
	fmt.Println("tags:", cfg.Tags)
	return cfg
}

```
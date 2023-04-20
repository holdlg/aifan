# Gin Cors

```go
package router

import (
	"time"
	"xmi-api/internal/api/ams"
	"xmi-api/internal/api/krs"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Router() {
	r := gin.Default()

	// 支持跨域请求
	config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"http://localhost:5173", "http://127.0.0.1:5173"}
	// config.AllowHeaders = []string{"content-type", "jwe"}
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"*"}
	config.ExposeHeaders = []string{"Content-Length", "Authorization", "Content-Type"}
	config.AllowCredentials = true
	config.MaxAge = 12 * time.Hour
	r.Use(cors.New(config))

	ams.AmsRouter(r)
	krs.KrsRouter(r)

	r.Run(":8080")
}

```


## 中间件 一
```go
// 处理跨域请求,支持options访问
func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
 
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization, Token")
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type")
		c.Header("Access-Control-Allow-Credentials", "true")
 
		//放行所有OPTIONS方法
		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		// 处理请求
		c.Next()
	}
}
```

## 中间件 二
```go
func Cors() gin.HandlerFunc {
	return cors.New(cors.Config{
		AllowAllOrigins:  true,
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"Content-Length", "Authorization", "Content-Type"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
		},
	)
}
```
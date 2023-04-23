## bug

# bug 1

> json: cannot unmarshal string into Go value of type int64

- 前端传递的 id 是 string, go struct 是 int 类型，需要加,string
- omitempty 是处理空的

```Go
type Student struct {
   Id   int64  `json:"id,string,omitempty"`
   Name string `json:"name,omitempty"`
}
```

# bug 2

> error strings should not be capitalized

```go
错误字符串不应该大写或以标点符号结束

当我们在 Golang 中使用 errors.New("Aaa.") 或者 fmt.Errorf("Aaa.") 形式返回 error 信息时，文字内容不应该以大写字母开头或者标点符号结尾。

只有按照警告的去修改 去掉大写字母开头 和 标点符号结尾 errors.New("aaa")
```

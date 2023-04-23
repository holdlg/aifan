# vue 部署配置

## history

nginx 支持 路由 history 路径 刷新

```
location / {
  try_files $uri $uri/ /index.html;
}
```

# [ElasticSearch7] 开启认证

启用账号和密码访问

elasticsearch.yml添加

```
 xpack.security.enabled: true
```

进入 ./bin

```
cd ./bin

# 自己填写
elasticsearch-setup-passwords interactive

# 自动化生成
elasticsearch-setup-passwords auto
```

python连接

```bash
from elasticsearch import Elasticsearch

es_clinet = Elasticsearch("https://ip:port", ssl_context=context, http_auth=('elastic','password'))
es_clinet = Elasticsearch([{"host": "127.0.0.1", "port": "9200"}, {"host": "127.0.0.3", "port": "9200"}])
es_clinet = Elasticsearch(['localhost:9200', '127.0.0.1:9300'], http_auth=('*', '*'), port=9200, timeout=50000)
```

url请求

```powershell
curl -XGET --user user:passwd 'http://XXXX:9200/XX/XXX'
```

elasticsearch head 请求

```powershell
# 在浏览器地址栏的地址最后添加
?auth_user=xxxx&auth_password=xxxxx

# 举例 ([[[浏览器地址栏]]]的地址)
chrome-extension://ffmkiejjmecolpfloofpjologoblkegm/elasticsearch-head/index.html?auth_user=xxxx&auth_password=xxxxx
```

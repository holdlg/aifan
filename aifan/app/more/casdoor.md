# casdoor

```
driverName = postgres
dataSourceName = "user=postgres password=postgres host=localhost port=5432 sslmode=disable dbname=casdoor"
dbName =
```

```bash
docker run -d --name casdoor -p 8000:8000 -v /root/pg/conf:/conf casbin/casdoor:v1.141.0
```

```bash
docker run -d --name casdoor \
  -e driverName='postgres' \
  -e dataSourceName='user=postgres password=postgres host=10.0.35.86 port=5432 sslmode=disable dbname=casdoor' \
  -e dbName='' \
  -p 8000:8000 \
  casbin/casdoor:v1.141.0
```

```bash
nerdctl run -d --name casdoor   -e driverName='postgres'   -e dataSourceName='user=postgres password=postgres host=10.0.35.77 port=5432 sslmode=disable dbname=casdoor'   -e dbName=''   -p 80:8000   casbin/casdoor:v1.215.0
```

```bash
docker run -d --name casdoor  -v /root/casdoor/conf:/conf/   -e driverName='postgres'   -e dataSourceName='user=postgres password=postgres host=10.0.35.77 port=5432 sslmode=disable dbname=casdoor'   -e dbName=''   -p 8000:8000   casbin/casdoor:v1.239.0
```


```bash
appname = casdoor
httpport = 8000
runmode = dev
copyrequestbody = true
driverName = postgres
dataSourceName = "user=postgres password=postgres host=10.0.35.86 port=5432 sslmode=disable dbname=casdoor"
dbName =
tableNamePrefix =
showSql = false
redisEndpoint =
defaultStorageProvider = 
isCloudIntranet = false
authState = "casdoor"
socks5Proxy = "127.0.0.1:10808"
verificationCodeTimeout = 10
initScore = 2000
logPostOnly = true
origin =
staticBaseUrl = "https://cdn.casbin.org"
isDemoMode = false
batchSize = 100
ldapServerPort = 389
languages = en,zh,es,fr,de,ja,ko,ru
```
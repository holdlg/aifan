# [Python 包] requests

requests请求重定向后，获取重定向地址的headers,cookie

```json
response = requests.post(url, data, headers, verify=False)

for his in response.history:
    print(his.headers)
    print(his.headers['Set-Cookie'])
    print(his.cookies)
```

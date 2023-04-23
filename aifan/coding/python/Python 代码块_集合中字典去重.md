# [Python 代码块] 集合中字典去重

集合中字典去重

```python
if __name__ == "__main__":
  v = [{'hostname': 'www.aaa.com', 'app': 'adsdfs'}, {'hostname': 'www.aaa.com', 'app': 'adsdfs'},{'hostname': 'www.aaa2.com', 'app': 'ad3sdfs'}]
    b = [dict(t) for t in set([tuple(d.items()) for d in v])]
    print(b)

```

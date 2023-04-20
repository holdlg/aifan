# [Python 代码块] 装饰器获取模块函数名

```python
def get_def_name(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(func.__module__)
        print(func.__name__)
        return func(*args, **kwargs)
    return wrapper


@get_def_name
def test():
    pass
```

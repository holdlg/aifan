# [Python 基础] 路径

# 定位到调用文件，绝对路径

```python
__file__ = /dashed/src/scripts/test/test_path.py
os.path.abspath(__file__) = /dashed/src/scripts/test/test_path.py
os.path.realpath(__file__) =  /dashed/src/scripts/test/test_path.py
os.path.split(os.path.realpath(__file__)) = ('/dashed/src/scripts/test', 'test_path.py')
```

# 定位到调用文件到目录，绝对路径

```python
os.path.dirname(os.path.realpath(__file__)) = /dashed/src/scripts/test
```

# 定位到运行程序的目录

```python
os.getcwd() = /dashed
```

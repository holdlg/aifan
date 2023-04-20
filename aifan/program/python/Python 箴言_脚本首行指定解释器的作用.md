# [Python 箴言] 脚本首行指定解释器的作用

#### 名词解释

在脚本中第一行以

`#!`

开头的代码，在计算机行业中叫做

`Shebang`

，
也叫做&#x20;

`sha-bang`

/

`hashbang`

/

`pound-bang`

/

`hash-pling`

，
作用是指定由哪个解释器来执行脚本。

#### 写法

python脚本首行一般是这么写的

```python
#!/usr/bin/env python
```

或

```python
#!/usr/bin/python
```

其中

`#!/usr/bin/env python`

写法比较好，因为python的路径并不一定都在/usb/bin下。

#### 作用

当命令行运行&#x20;

`python test.py`

&#x20;会忽略文件内指定的&#x20;

`#!/usr/bin/env python`

运行

`chmod +x test.py`

&#x20;再运行

`test.py`

&#x20;会自动查找

`#!/usr/bin/env python`

指定解释器来执行脚本

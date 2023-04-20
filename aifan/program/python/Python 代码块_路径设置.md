# [Python 代码块] 路径设置

os

```python
import os
# 当前文件目录
_CURRENT_DIR = os.path.abspath(os.path.dirname(__file__))
# 根目录
PROJECT_ROOT = os.path.normpath(os.path.join(_CURRENT_DIR, '..'))
# 配置文件目录
CONFIG_DIR = os.path.join(PROJECT_ROOT, 'config')
# 日志文件目录
LOGGING_DIR = os.path.join(PROJECT_ROOT, 'log')
# 资源文件目录
RESOURCE_DIR = os.path.join(PROJECT_ROOT, 'resource')
```

pathlib

```python

from pathlib import Path

# 当前文件目录
_CURRENT_DIR = Path(__file__)
# 根目录
PROJECT_ROOT = _CURRENT_DIR.parent.parent
# 配置文件目录
CONFIG_DIR = PROJECT_ROOT.joinpath('config')
# 日志文件目录
LOGGING_DIR = PROJECT_ROOT.joinpath('log')
# 资源文件目录
RESOURCE_DIR = PROJECT_ROOT.joinpath('resource')

```

推荐pathlib 面向对象，语句简短。

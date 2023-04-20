# [Python 代码块] log日志设置

# 日志级别

```python
import logging

# 日志级别
# critical > error > warn > info > debug

logging.debug('debug message')
logging.info('info message')
logging.warn('warn message')
logging.error('error message')
logging.critical('critical message')
```

# 级别说明

| ​**级别**  | ​**何时使用**              |
| -------- | ---------------------- |
| DEBUG    | 详细信息，典型地调试问题时会感兴趣。     |
| INFO     | 证明事情按预期工作。             |
| WARNING  | 表明发生了一些意外，软件还是在正常工作。   |
| ERROR    | 由于更严重的问题，软件已不能执行一些功能了。 |
| CRITICAL | 严重错误，表明软件已不能继续运行了。     |

# 自定义logging模块

```python
# -*- coding:utf-8 -*-

import os
import logging
from logging.handlers import RotatingFileHandler
from common_config import LOGGING_DIR


def init_logging(log_name="dashed.log"):
    """Initializes logging."""

    logger = logging.getLogger()
    logger.setLevel(logging.DEBUG)

    # 没有目录则自动创建
    if not os.path.exists(LOGGING_DIR):
        os.makedirs(LOGGING_DIR)

    LOG_FILE = os.path.join(LOGGING_DIR, log_name)

    # 日志文件不分割的写法
    # fh = logging.FileHandler(LOG_FILE)
    # fh.setLevel(logging.DEBUG)

    # 使用maxBytes设置日志文件大于5M进行自动分割
    # 使用backupCount指定保留的备份文件的个数
    # 设置日志的最低级别
    rfh = RotatingFileHandler(LOG_FILE, maxBytes=5*1024*1024, backupCount=90)
    rfh.setLevel(logging.WARNING)

    # 设置控制台输出日志的最低级别
    sh = logging.StreamHandler()
    sh.setLevel(logging.WARNING)

    # 定义输出日志的格式
    formatter = logging.Formatter("%(asctime)s [%(name)s:%(lineno)d] %(levelname)s: %(message)s")
    rfh.setFormatter(formatter)
    sh.setFormatter(formatter)

    logger.addHandler(sh)
    logger.addHandler(rfh)
```

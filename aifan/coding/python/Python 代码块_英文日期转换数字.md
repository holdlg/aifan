# [Python 代码块] 英文日期转换数字

```python
import time
import datetime


def en_time():
    # December 05, 2019
    # January 01, 2020
    en_time = time.strftime('%B %d, %Y', time.localtime())
    print(en_time)
    en_time_unix = time.mktime(time.strptime(en_time, "%B %d, %Y"))
    datetime_obj = datetime.datetime.fromtimestamp(en_time_unix)
    print(str(datetime_obj)[0:10])

```

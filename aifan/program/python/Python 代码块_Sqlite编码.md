# [Python 代码块] Sqlite编码

# error

```
(u'C\x00V\x00E\x00-\x002\x000\x001',)
CVE-201
(u'C\x00V\x00E\x00-\x002\x000\x001',)
CVE-201
```

# 解决方法

使用 conn.text\_factory = bytes 解决此问题

```python
# -*- coding:utf-8 -*-
import os
import sys
import sqlite3
reload(sys)
sys.setdefaultencoding('utf-8')


def main():
    db = os.path.join('/root', 'dashed', 'resource', 'second', 'VFEED', 'vfeed.db')
    conn = sqlite3.connect(db)


    conn.text_factory = bytes


    cursor = conn.cursor()
    cursor.execute('SELECT cveid FROM nvd_db order by cveid desc limit 20')
    tuple_cve = ''
    print(cursor.fetchall())
    while tuple_cve is not None:
        tuple_cve = cursor.fetchone()
        print(tuple_cve)
        print(tuple_cve[0])


if __name__ == '__main__':
    main()
```

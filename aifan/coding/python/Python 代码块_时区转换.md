# [Python 代码块] 时区转换

```python
from datetime import datetime, tzinfo, timedelta


class Zone(tzinfo):
    def __init__(self, offset, isdst, name):
        self.offset = offset
        self.isdst = isdst
        self.name = name

    def utcoffset(self, dt):
        return timedelta(hours=self.offset) + self.dst(dt)

    def dst(self, dt):
        return timedelta(hours=1) if self.isdst else timedelta(0)

    def tzname(self, dt):
        return self.name


GMT = Zone(0, False, 'GMT')
EST = Zone(-5, False, 'EST')
CST = Zone(8, False, 'CST')

print(datetime.utcnow().strftime('%m/%d/%Y %H:%M:%S %Z'))
print(datetime.now(GMT).strftime('%m/%d/%Y %H:%M:%S %Z'))
print(datetime.now(EST).strftime('%m/%d/%Y %H:%M:%S %Z'))
print(datetime.now(CST).strftime('%m/%d/%Y %H:%M:%S %Z'))

t = datetime.strptime('2011-01-21 02:37:21', '%Y-%m-%d %H:%M:%S')
t = t.replace(tzinfo=GMT)
print(t)
print(t.astimezone(EST))
```

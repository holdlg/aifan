# [Python 基础] asyncio

示例一

```python
from user import users
import asyncio


async def print_user():
    while True:
        print('Hello ...')
        print(users)
        await asyncio.sleep(4)
        print('... World!')


asyncio.run(print_user())

```

示例二

```javascript
import asyncio
import time

async def main(x):
    print(x)


async def defg():
    x = 1
    print(time.time())
    al = asyncio.create_task(main(x))
    al2 = asyncio.create_task(main(x))
    al3 = asyncio.create_task(main(x))
    await al
    await al2
    await al3
    print(time.time())

# Python 3.7+
asyncio.run(defg())
```

# [Python 代码块] 随机中文

# 随机中文

```bash
import random


def Unicode():
    val = random.randint(0x4e00, 0x9fbf)
    return chr(val)


def GBK2312():
    head = random.randint(0xb0, 0xf7)
    body = random.randint(0xa1, 0xfe)
    val = f'{head:x} {body:x}'
    str = bytes.fromhex(val).decode('gb2312')
    return str


if __name__ == '__main__':
    for x in range(1, 40):
        name = "{}{}".format(GBK2312(), GBK2312())
        print(name)

```

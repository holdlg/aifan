# [Python 代码块] CSV保存中文

# 保存中文

```python
#!python3
#coding:utf8
import csv

data = [[u'American',u'美国人'],
        [u'Chinese',u'中国人']]

with open('results.csv','w',newline='',encoding='utf-8-sig') as f:
    w = csv.writer(f)
    w.writerows(data)
```

# 读取

```python
import csv


def readFileRows():
    with open('soft.csv', 'r') as f:
        file = csv.reader(f)
        for line in file:
            print(line)
            print(line[0])


if __name__ == "__main__":
    readFileRows()

```

```python
import csv

filename = "my_data.csv"
fields = []
rows = []

# 读取csv文件
with open(filename, 'r') as csvfile:
# 创建一个csv reader对象
csvreader = csv.reader(csvfile)

# 从文件中第一行中读取属性名称信息
# fields = next(csvreader) python3.2 以上的版本使用
fields = csvreader.next()

# 接着一行一行读取数据
for row in csvreader:
rows.append(row)

# 打印前5行信息
for row in rows[:5]:
print(row)
```

# 写入

```python
# 多行写入
import csv
header = ['line1','line2','line3']
rows = [[1,2,3],[4,5,6],[7,8,9]]
with open('test.csv','w') as f:
    file = csv.writer(f)
    file.writerow(header)
    file.writerows(rows)


    
# 字典写入
import csv
header = ['line1','line2','line3']
rows = {{'line1':1,'line2':2,'line3':3},
        {'line1':4,'line2':5,'line3':6},
        {'line1':7,'line2':8,'line3':9}}
with open('dict.csv','w', newline='') as f:
    file = csv.DictWriter(f,header)
    file.writeheader()
    file.writerows(rows)

```

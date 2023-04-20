# [ElasticSearch7] 批量导入

```python
import random
from elasticsearch import Elasticsearch
from elasticsearch import helpers
 
es=Elasticsearch(hosts='http://localhost',port=9200)
levels=['info','debug','warn','error']
actions=[]

for i in range(100):
    level=levels[random.randrange(0,len(levels))]
    action={'_op_type':'index',#操作 index update create delete  
            '_index':'log_level',#index
            '_type':'doc',  #type
            '_source':{'level':level}}
    actions.append(action)
    
# 一， 使用bulk方式
helpers.bulk(client=es,actions=actions)

# 二，使用parallel_bulk方式
for success, info in parallel_bulk(es,actions):
if not success:
    print('A document failed:', info)

# 三，使用streaming_bulk
# streaming_bulk与parallel_bulk类似  需要遍历才会运行
# 都可以设置每个批次的大小，parallel_bulk还可以设置线程数  
for ok,response in helpers.streaming_bulk(es,actions):
    if not ok:
       print(response)
```

```python
import csv
from elasticsearch import Elasticsearch
from elasticsearch import helpers


es=Elasticsearch(hosts='http://localhost',port=9200)

def gendata():
    with open('scripts/assets.csv', 'r', encoding='utf-8') as f:
        file = csv.reader(f)
        for line in file:
            yield {
                "_index": "assets",
                "_id":  line[0],
                "_source": {
                    "ip": line[0],
                    "ipv": line[1],
                    "ipPosition": line[2],
                    "level": line[3],
                    "status": line[4],
                    "domain": line[5].split(','),
                    "os": line[6],
                    "submitTime": line[7],
                    "hard": [],
                    "soft": []
                }
            }


def input_es():
    print(helpers.bulk(es, gendata()))

```

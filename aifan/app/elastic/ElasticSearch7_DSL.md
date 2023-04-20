
# [ElasticSearch7] DSL

## 查询数组为空

```bash
filter.append({"script": {"script": "doc['fingerprint.keyword'].length > 0"}})
```

## 多条件查询

```json
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "reporter": "天融信"
          }
        },
        {
          "match_phrase": {
            "isZero": "是"
          }
        }
      ],
      "filter": {
        "range": {
          "submitTime": {
            "gte": "2019-01-01",
            "lte": "2019-12-31"
          }
        }
       
      }
    }
  }
}
```

## 全文检索加条件过滤

```json
{
    "query": {
        "bool": {  
            "must" : {
                "multi_match": {
                    "query": "nginx",
                    "fields": ["*"]
                }
            },
            "filter": {
                "term": {"industry.vkb.flag": 1}
            }
        }
    }
}
```

## 按照createTime排序

```json
{
    "query": {
        "match_all": {}
    },
    "sort": [
        {
            "createTime": {
                "order": "desc"
            }
        }
    ],
    "size": 10,
    "from": 0
}
```

## 一个字段多个值查询

```json
{
  query: {
    bool: {
      must: [
        {terms: {status: [0, 1]}}
      ]
    }
  },
  "sort": [
    {
      "createTime": {
        "order": "desc"
      }
    }
  ],
  "size": 1000
}
```

## 检索

```json
{
  "query": {
    "bool": {
      "must": {
        "exists": {
          "field": "cve"
        }
      },
      "filter": {
        "range": {
          "cnnvd.published": {
            "gte": "2019-01-01",
            "lte": "2019-06-30T23:59:59"
          }
        }
      }
    }
  }
}
```

## terms 查询

```bash
{
    "query": {
        "bool": {
            "must": [
                {"terms": {"queueType": ["auto"]}},
                {"terms": {"queueStatus": [2, 5]}}
            ]
        }
    },
    "size": 5
}
```

## 类属于mysql的like查询

```bash
key = ''
vaule = ''

{
  "query": {
    "wildcard": {'{}.keyword'.format(key): '*{}*'.format(value)}
  }
}
```

## must_not 不存在的字符

```json
{
  "query": {
    "bool": {
      "must": [
        {
          "query_string": {
            "query": "*",
            "fields": [
              "name^"
            ]
          }
        }
      ],
      "should": [],
      "must_not": [
        {
          "nested": {
            "path": "extensions.organization",
            "query": {
              "exists": {
                "field": "markets"
              }
            }
          }
        }
      ]
    }
  }
}
```

## 查询数组长度大于0

查询数组不为空的记录

```json
{
  "query": {
    "bool": {
      "must": [{
        "match_phrase": {
          "rwNumber": "RW-1647918680-ln60sL"
        }
      }],
      "must_not": [],
      "filter": [{
        "script": {
          "script": "doc['fingerprint.keyword'].length > 0"
        }
      }]
    }
  },
  "sort": [{
    "createTime": {
      "order": "desc"
    }
  }],
  "from": 0,
  "size": 10,
  "track_total_hits": "true"
}
```

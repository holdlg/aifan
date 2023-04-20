# [ElasticSearch7] Scripting

## search

```json
{
  "query": {
    "script": {
      "script": "doc['currentTask'].value < doc['maxTask'].value && doc['status'].value ==1 && doc['online'].value ==1"
    }
  },
    "sort": [
        {
            "currentTask": {
                "order": "asc"
            }
        }
    ],
    "size": 1
}
```

## update

```json
{
   "script" : {
     "source": "ctx._source.status += params.status",
     "params" : {
        "status" : 10
     }
   }
}
```

## or

```json
{
   "script" : {
     "source": "ctx._source.status =+ 10",
   }
}
```

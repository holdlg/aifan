# [Pulsar] 延迟推送

```bash
from pulsar import ConsumerType

# 重要参数ConsumerType
consumer = pulsar_client.subscribe(topic='aps-task-signal', subscription_name='aps-sub', consumer_type=ConsumerType.Shared)


producer.send(b'hello', deliver_at=int(round(time.time() * 1000)) + 1100)

producer.send(b'hello', deliver_after=timedelta(milliseconds=1100))
```

参考：

[https://github.com/apache/pulsar/blob/master/pulsar-client-cpp/python/pulsar\_test.py](https://github.com/apache/pulsar/blob/master/pulsar-client-cpp/python/pulsar_test.py "https://github.com/apache/pulsar/blob/master/pulsar-client-cpp/python/pulsar_test.py")

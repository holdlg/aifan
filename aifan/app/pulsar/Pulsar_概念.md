# [Pulsar] 概念

*   [Messages](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#messages "Messages")

*   [Producers](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#producers "Producers")

    *   [发送模式](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%8F%91%E9%80%81%E6%A8%A1%E5%BC%8F "发送模式")

    *   [压缩](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%8E%8B%E7%BC%A9 "压缩")

    *   [批量处理](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E6%89%B9%E9%87%8F%E5%A4%84%E7%90%86 "批量处理")

    *   [分块](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%88%86%E5%9D%97 "分块")

*   [Consumers](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#consumers "Consumers")

    *   [接收模式](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E6%8E%A5%E6%94%B6%E6%A8%A1%E5%BC%8F "接收模式")

    *   [监听](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E7%9B%91%E5%90%AC "监听")

    *   [确认](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E7%A1%AE%E8%AE%A4 "确认")

    *   [取消确认](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%8F%96%E6%B6%88%E7%A1%AE%E8%AE%A4 "取消确认")

    *   [确认超时](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E7%A1%AE%E8%AE%A4%E8%B6%85%E6%97%B6 "确认超时")

    *   [死信主题](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E6%AD%BB%E4%BF%A1%E4%B8%BB%E9%A2%98 "死信主题")

    *   [Retry letter topic](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#retry-letter-topic "Retry letter topic")

*   [Topic](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#topic "Topic")

*   [命名空间](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4 "命名空间")

*   [订阅](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E8%AE%A2%E9%98%85 "订阅")

    *   [Consumerless Subscriptions and Their Corresponding Modes](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#consumerless-subscriptions-and-their-corresponding-modes "Consumerless Subscriptions and Their Corresponding Modes")

    *   [Exclusive](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#exclusive "Exclusive")

    *   [Failover（灾备）](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#failover%EF%BC%88%E7%81%BE%E5%A4%87%EF%BC%89 "Failover（灾备）")

    *   [Shared（共享）](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#shared%EF%BC%88%E5%85%B1%E4%BA%AB%EF%BC%89 "Shared（共享）")

    *   [Key\_Shared](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#key_shared "Key_Shared")

*   [多主题订阅](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%A4%9A%E4%B8%BB%E9%A2%98%E8%AE%A2%E9%98%85 "多主题订阅")

*   [分区 topic](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%88%86%E5%8C%BA-topic "分区 topic")

    *   [路由模式](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E8%B7%AF%E7%94%B1%E6%A8%A1%E5%BC%8F "路由模式")

    *   [顺序保证](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E9%A1%BA%E5%BA%8F%E4%BF%9D%E8%AF%81 "顺序保证")

    *   [散列scheme](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E6%95%A3%E5%88%97scheme "散列scheme")

*   [非持久topic](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E9%9D%9E%E6%8C%81%E4%B9%85topic "非持久topic")

    *   [性能](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E6%80%A7%E8%83%BD "性能")

    *   [客户端API](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%AE%A2%E6%88%B7%E7%AB%AFapi "客户端API")

*   [消息保留和过期](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E6%B6%88%E6%81%AF%E4%BF%9D%E7%95%99%E5%92%8C%E8%BF%87%E6%9C%9F "消息保留和过期")

*   [消息去重](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E6%B6%88%E6%81%AF%E5%8E%BB%E9%87%8D "消息去重")

    *   [生产者幂等](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E7%94%9F%E4%BA%A7%E8%80%85%E5%B9%82%E7%AD%89 "生产者幂等")

    *   [去重和实际一次语义](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E5%8E%BB%E9%87%8D%E5%92%8C%E5%AE%9E%E9%99%85%E4%B8%80%E6%AC%A1%E8%AF%AD%E4%B9%89 "去重和实际一次语义")

*   [消息延迟传递](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E6%B6%88%E6%81%AF%E5%BB%B6%E8%BF%9F%E4%BC%A0%E9%80%92 "消息延迟传递")

    *   [Broker](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#broker "Broker")

    *   [生产者（Producer）](https://pulsar.apache.org/docs/zh-CN/concepts-messaging/#%E7%94%9F%E4%BA%A7%E8%80%85%EF%BC%88producer%EF%BC%89 "生产者（Producer）")

# [Python 包] Tensorflow 2 测试数据集下载

# 思路

1.  设置本机代理 [http://127.0.0.1:1087](http://127.0.0.1:1087 "http://127.0.0.1:1087") ，科学上网操作

2.  关掉ssl验证

# error

```
Exception: URL fetch failure on https://storage.googleapis.com/tensorflow/tf-keras-datasets/mnist.npz: None -- [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1056)
```

# 源码

```
from __future__ import absolute_import, division, print_function, unicode_literals


import os
import ssl
import tensorflow as tf
os.environ['http_proxy'] = 'http://127.0.0.1:1087'
os.environ['https_proxy'] = 'https://127.0.0.1:1087'

ssl._create_default_https_context = ssl._create_unverified_context



if __name__ == "__main__":
    mnist = tf.keras.datasets.mnist
    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    x_train, x_test = x_train / 255.0, x_test / 255.0


    model = tf.keras.models.Sequential([
    tf.keras.layers.Flatten(input_shape=(28, 28)),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10, activation='softmax')
    ])

    model.compile(optimizer='adam',
                loss='sparse_categorical_crossentropy',
                metrics=['accuracy'])


    model.fit(x_train, y_train, epochs=5)

    model.evaluate(x_test, y_test)
```

原文地址：

[http://www.holdlg.com/post/tensorflow2-ce-shi-shu-ju-ji-xia-zai](http://www.holdlg.com/post/tensorflow2-ce-shi-shu-ju-ji-xia-zai "http://www.holdlg.com/post/tensorflow2-ce-shi-shu-ju-ji-xia-zai")

在线截图小工具：

[网页相机](http://www.zshua.cc/ "网页相机")

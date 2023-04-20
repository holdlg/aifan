# [Python 包] brew 安装 Python3

# 安装

brew install python3

# 1. \[bug] 找不到 openssl

## pip3 异常

WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.

```bash
pip3 install --upgrade pip
WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/pip/
WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/pip/
WARNING: Retrying (Retry(total=2, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/pip/
WARNING: Retrying (Retry(total=1, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/pip/
WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/pip/
Could not fetch URL https://pypi.org/simple/pip/: There was a problem confirming the ssl certificate: HTTPSConnectionPool(host='pypi.org', port=443): Max retries exceeded with url: /simple/pip/ (Caused by SSLError("Can't connect to HTTPS URL because the SSL module is not available.")) - skipping
Requirement already up-to-date: pip in /usr/local/lib/python3.7/site-packages (19.1.1)
WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
Could not fetch URL https://pypi.org/simple/pip/: There was a problem confirming the ssl certificate: HTTPSConnectionPool(host='pypi.org', port=443): Max retries exceeded with url: /simple/pip/ (Caused by SSLError("Can't connect to HTTPS URL because the SSL module is not available.")) - skipping
```

## python3 异常

ImportError: dlopen(/usr/local/Cellar/python/3.7.4\_1/Frameworks/Python.framework/Versions/3.7/lib/python3.7/lib-dynload/\_ ssl.cpython-37m-darwin.so, 2): Library not loaded: /usr/local/opt/openssl\@1.1/lib/libssl.1.1.dylib

```bash
> python3

Python 3.7.4 (default, Sep 28 2019, 16:39:19) 
[Clang 11.0.0 (clang-1100.0.33.8)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import ssl
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/local/Cellar/python/3.7.4_1/Frameworks/Python.framework/Versions/3.7/lib/python3.7/ssl.py", line 98, in <module>
    import _ssl             # if we can't import it, let the error propagate
ImportError: dlopen(/usr/local/Cellar/python/3.7.4_1/Frameworks/Python.framework/Versions/3.7/lib/python3.7/lib-dynload/_ssl.cpython-37m-darwin.so, 2): Library not loaded: /usr/local/opt/openssl@1.1/lib/libssl.1.1.dylib
  Referenced from: /usr/local/Cellar/python/3.7.4_1/Frameworks/Python.framework/Versions/3.7/lib/python3.7/lib-dynload/_ssl.cpython-37m-darwin.so
  Reason: image not found
```

## 解决方法

brew install&#x20;

[openssl@1.1](mailto:openssl@1.1 "openssl@1.1")

ln -s /usr/local/Cellar/openssl\@1.1/1.1.1d /usr/local/opt/openssl\@1.1

## 小技巧

brew link&#x20;

[openssl@1.1](mailto:openssl@1.1 "openssl@1.1")

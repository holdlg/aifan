# [Ubuntu16] chrome 73 auto allow flash

linux 下chrome 73 自动打开flash 设置

# chrome flash auto allow

### 指定chrome的flash

官网下载flash, 建议下载ppapi的:&#x20;

[https://www.flash.cn/](https://www.flash.cn/ "https://www.flash.cn/")

然后指定

`libpepflashplayer.so`

路径，即可。

python 代码

```python
browers_options = Options()
        browers_options.add_argument('--ppapi-flash-version=32.0.0.171')
        browers_options.add_argument('--ppapi-flash-path=/opt/google/chrome/libpepflashplayer.so')
        browers_options.add_argument('no-sandbox')
        browers_options.add_argument('--window-size=1280,1024')
        self.video_browers_driver = webdriver.Chrome(
            chrome_options=browers_options)
        self.video_browers_driver.set_window_position(0, 0)
        self.video_browers_driver.get(self.target)
```

### 设置自动允许

mkdir -p /etc/opt/chrome/policies
mkdir -p /etc/opt/chrome/policies/managed
mkdir -p /etc/opt/chrome/policies/recommended
vi /etc/opt/chrome/policies/managed/test\_policy.json

```
{
    "PluginsAllowedForUrls": ["http://*", "https://*"]
}
```

参考链接：

[https://www.chromium.org/administrators/linux-quick-start](https://www.chromium.org/administrators/linux-quick-start "https://www.chromium.org/administrators/linux-quick-start")

[https://www.chromium.org/administrators/policy-list-3#PluginsAllowedForUrls](https://www.chromium.org/administrators/policy-list-3#PluginsAllowedForUrls "https://www.chromium.org/administrators/policy-list-3#PluginsAllowedForUrls")

flash 可以官网下载，然后指定

`libpepflashplayer.so`

路径，即可。

[https://www.codercto.com/a/70819.html](https://www.codercto.com/a/70819.html "https://www.codercto.com/a/70819.html")

macOS 设置：&#x20;

[https://www.chromium.org/administrators/mac-quick-start](https://www.chromium.org/administrators/mac-quick-start "https://www.chromium.org/administrators/mac-quick-start")

原文链接：

[http://www.holdlg.com/post/linux-chrome-73-auto-allow-flash](http://www.holdlg.com/post/linux-chrome-73-auto-allow-flash "http://www.holdlg.com/post/linux-chrome-73-auto-allow-flash")

# [Docker] 安装Chrome

```
FROM ubuntu:18.04

# Install Chrome for Selenium
RUN curl https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o /chrome.deb
RUN dpkg -i /chrome.deb || apt-get install -yf
RUN rm /chrome.deb

# Install chromedriver for Selenium
RUN curl https://chromedriver.storage.googleapis.com/2.38/chromedriver_linux64.zip -o /usr/local/bin/chromedriver
RUN chmod +x /usr/local/bin/chromedriver

# 安装中文字体
RUN apt-get update 
RUN apt-get install -y --force-yes --no-install-recommends fonts-wqy-microhei ttf-wqy-zenhei
```

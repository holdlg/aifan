# [Python 代码块] 爬取网页解析存储为csv

````python
# /usr/bin/python3
import csv
import codecs
import os
import urllib.request as ur
import urllib.parse as up
from lxml import etree

url = 'http://www.holdlg.com?link=1'
domain = 'http://www.holdlg.com'


def main():
    # 爬取网页
    with ur.urlopen(url) as f:
        # 使用lxml解析html
        html = etree.HTML(f.read())

        # xpath查找属性包含align="center"的tr标签
        result = html.xpath('//tr[@align="center"]')
        
        elems = []
        for elem in result:
            eles = []
            # 迭代标签子节点
            for ele in elem.iter():
                if ele.text is not None and len(ele.text.strip()) > 0:
                    # 读取标签文本值
                    eles.append(ele.text.strip())
                if 'href' in ele.attrib:
                    # 读取标签的href属性值
                    href = ele.attrib['href']
                    eles.append(href)
            elems.append(eles)
    return elems
            

def save_csv():
    tags_title = ['标题1','标题2','标题3']
    elems = main()
    with open('./result.csv', 'w') as f:
        # 设置BOM为UTF8，防止Execl打开乱码
        f.write(codecs.BOM_UTF8.decode('utf-8'))
        writer = csv.writer(f)
        # 写入标题
        writer.writerow(tags_title)
        # 写入内容
        writer.writerows(elems)


def submit_formdata():
    ``` 提交表单数据 ```
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "max-age=0",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "DNT": 1,
        "Host": "sales.coamc.com.cn",
        "Origin": "http://www.holdlg.com",
        "Referer": "http://www.holdlg.com?link=1",
        "Upgrade-Insecure-Requests": 1,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
    }
    formdata = {
        "username": "holdlg",
        "password": "******",
        "age": 16,
        "work": "python开发"
    }

    # 格式化formdata数据
    data = up.urlencode(formdata).encode('utf-8')

    # 设置headers 和 data
    req = ur.Request(url, data=data, headers=headers)

    # 执行请求
    res = ur.urlopen(req)

    html = res.read().decode('utf-8')

    return html


def save_text():
    ```保存文本```
    html = submit_formdata()

    # open()打开模式是 `w`
    with open('./test.html', 'w') as f:
        f.write(html)

if __name__ == '__main__':
    save_text()
    save_csv()
````

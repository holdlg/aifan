# [Python 代码块] 从Url中提取域名

```python
from urllib.parse import urlparse

def parse_domain(url):
    second_domain = ['.com.cn', '.net.cn', '.org.cn', '.gov.cn', '.edu.cn', '.ac.cn', '.bj.cn', '.fj.cn', '.sh.cn', '.jx.cn', '.tj.cn', '.sd.cn', '.cq.cn', '.ha.cn', '.he.cn', '.hb.cn', '.sx.cn', '.hn.cn', '.nm.cn',
                     '.gd.cn', '.ln.cn', '.gx.cn', '.jl.cn', '.hi.cn', '.hl.cn', '.sc.cn', '.js.cn', '.gz.cn', '.zj.cn', '.yn.cn', '.ah.cn', '.xz.cn', '.sn.cn', '.tw.cn', '.gs.cn', '.hk.cn', '.qh.cn', '.mo.cn', '.nx.cn', '.xj.cn']
    result = urlparse(url)
    domains = result.netloc.split('.')
    domains_len = len(domains)
    if domains_len > 2:
        if '.{}.{}'.format(domains[-2], domains[-1]) in second_domain:
            return '{}.{}.{}'.format(domains[-3], domains[-2], domains[-1])
        else:
            return '{}.{}'.format(domains[-2], domains[-1])
    else:
        return '.'.join(domains)


if __name__ == "__main__":
    urls = ['https://abc.com/spreadsheet/ccc?key=blah-blah-blah-blah#gid=1',
            'https://abc.com.cn/spreadsheet/ccc?key=blah-blah-blah-blah#gid=1',
            'https://www.abc.com/spreadsheet/ccc?key=blah-blah-blah-blah#gid=1',
            'https://www.abc.com.cn/spreadsheet/ccc?key=blah-blah-blah-blah#gid=1',
            'https://aaa.bbb.abc.com/spreadsheet/ccc?key=blah-blah-blah-blah#gid=1']
    print([parse_domain(url) for url in urls])
```

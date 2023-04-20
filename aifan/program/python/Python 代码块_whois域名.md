# [Python 代码块] whois域名

```python
import io
import sys
import subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stdin = io.TextIOWrapper(sys.stdin.buffer, encoding='utf-8')

if __name__ == "__main__":
    with subprocess.Popen(["whois", 'fir8.com'], stdout=subprocess.PIPE) as proc:
        whois_info = proc.stdout.read()
    with open('whois2.txt', 'w') as f:
        f.write(str(whois_info))
    # print(subprocess.getoutput('whois qq.com').decode('utf-8'))

```

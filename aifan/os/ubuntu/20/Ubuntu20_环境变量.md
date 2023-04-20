# [Ubuntu20] 环境变量

```bash

# 查看已有的环境变量
echo $PATH

# 添加环境变量
vi ${PWD}/.profile

export PATH=/opt/node/bin:$PATH

# 生效
source ${PWD}/.profile
```

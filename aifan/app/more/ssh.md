# ssh

## ssh config

vi \~/.ssh/config
```bash
Host gitlab
   Hostname 192.168.10.90
   Port 2222
   User root
```
## 生成
```bash
ssh-keygen -t rsa -C ""
enter: file name

ssh-keygen -t rsa -C "[cccc@xxx.com](mailto:cccc@xxx.com "cccc@xxx.com")" -f \~/.ssh/alicode
```
```bash
# github
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## 测试key是否添加成功
```bash
ssh -v [www.github.com](http://www.github.com "www.github.com")
```
## 查看密钥列表
```bash
ssh-add -l
```
## 将密钥添加到列表
```bash
ssh-add \~/.ssh/aliyuncode
```
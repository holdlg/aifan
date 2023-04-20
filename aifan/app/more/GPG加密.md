# GPG加密

```bash
gpg --version

## 生成新的密钥对
gpg --gen-key 
gpg --generate-key 

## 以全功能形式生成新的密钥对（期间会有一些密钥的配置）
gpg --full-generate-key
gpg --full-gen-key  

# 列出公钥
gpg --list-keys

gpg --list-key [用户ID]

# 列出私钥
gpg --list-secret-keys 

# 导出密钥
gpg --armor --output public-key.txt --export [用户ID]
gpg --armor --output private-key.txt --export-secret-keys
# 导出二进制gpg
gpg --output xxxx.public.gpg --export [用户ID]/[邮箱]
gpg --output xxxx.private.gpg --export-secret-keys [用户ID]/[邮箱]

# 创建子密钥
gpg --edit-key [用户ID]/[ASCII]
gpg> addkey

# 导出吊销证书
gpg --generate-revocation [用户ID]/[ASCII]
```

github 使用

```bash
# 生成
gpg --full-generate-key

# 列出私钥
gpg --list-secret-keys --keyid-format LONG

# 输出公钥
gpg --armor --export <key id>/<ASCII>
```

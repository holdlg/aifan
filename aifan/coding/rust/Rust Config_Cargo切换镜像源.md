# [Rust Config] Cargo切换镜像源

执行 &#x20;

`vi ``$HOME/.cargo/config`

&#x20;添加
​

中科大源：

[https://lug.ustc.edu.cn/wiki/mirrors/help/rust-crates/](https://lug.ustc.edu.cn/wiki/mirrors/help/rust-crates/ "https://lug.ustc.edu.cn/wiki/mirrors/help/rust-crates/")

```shell
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = 'ustc'
[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```

清华源

```shell
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"

replace-with = 'tuna'
[source.tuna]
registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"

#replace-with = 'ustc'
#[source.ustc]
#registry = "git://mirrors.ustc.edu.cn/crates.io-index"

[net]
git-fetch-with-cli = true
```

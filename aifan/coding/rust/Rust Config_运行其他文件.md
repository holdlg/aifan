# [Rust Config] 运行其他文件

在cargo.toml中添加

```shell
[[bin]]
name = "test"
path = "src/main_test.rs"


// 如果是lib
[lib]
name = "test"
path = "src/main_lib.rs"
```

运行

```shell
cargo run --bin test
```

设置默认运行test，在cargo.toml中添加

`default-run = "test"`

```shell
[package]
name = "xmbcli"
version = "0.1.0"
authors = ["root"]
edition = "2018"

default-run = "test"
```

\*\*
另一种方式，可以把rs文件放在src/bin目录下,运行时会自动识别，不需要再改cargo.toml

```shell
cargo run --bin main_test
```

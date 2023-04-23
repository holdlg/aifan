# [Rust WASM] 环境

## rust

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## wasm-pack

```shell
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

## cargo-generate

```shell
cargo install cargo-generate
```

## nodejs

[https://nodejs.org/en/download/current/](https://nodejs.org/en/download/current/ "https://nodejs.org/en/download/current/")

## openssl

```shell
apt-get install libssl-dev pkg-config
```

## wasm-bindgen

```shell
cargo install wasm-bindgen-cli
```

## web-sys

cargo.toml

```shell
[dependencies]
wasm-bindgen = "0.2.68"
web-sys = { version="0.3.45", features=[ "console" ] }
```

##

# [Rust Crate] reqwest

对就是这个：

[reqwest](https://crates.io/crates/reqwest "reqwest")

# Cargo.toml

```shell
[package]
name = "xmbcli"
version = "0.1.0"
authors = ["root"]
edition = "2018"
default-run = "xmbcli"
# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html


[dependencies]
structopt = "0.3.20"
reqwest = { version = "0.10", features = ["json"] }
tokio = { version = "0.2", features = ["full"] }
serde = "1.0"
serde_json = "1.0"
serde_derive = "1.0"
```

# reqwest get

```rust
use reqwest;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "http://10.0.36.112/";
    let resp = reqwest::get(url)
        .await?
        .text()
        .await?;
    println!("{:#?}", resp);
    Ok(())
}
```

# reqwest post

```rust
use reqwest;
use std::collections::HashMap;


fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut map = HashMap::new();
    map.insert("username", "root");
    map.insert("password", "root");

    let client = reqwest::Client::new();
    
    // response body
    let resp = client.post("http://10.0.36.112/login")
        .json(&map)
        .send()
        .await?
        .text()
        .await?;
    println!("{:#?}", resp);
    
    // response header & status
    let resp = client.post("http://10.0.36.112/login")
        .json(&map)
        .send()
        .await?;
    println!("{:#?}", resp.headers());
    println!("{:#?}", resp.status());
    Ok(())
}
```

# reqwest response text to struct

```rust
use reqwest;
use std::collections::HashMap;
use serde_derive::{Deserialize};  

#[derive(Deserialize)]
struct Resp {
    status: String,
    msg: String,
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut map = HashMap::new();
    map.insert("username", "root");
    map.insert("password", "root");

    let client = reqwest::Client::new();
    let res = client.post("http://10.0.36.112/login")
        .json(&map)
        .send()
        .await?
        .json::<Resp>()
        .await?;
    println!("------msg:{} ---status: {}", res.msg, res.status);
    Ok(())
}
```

# reqwest set headers

```rust
use reqwest;
use reqwest::header::HeaderMap;
use reqwest::header::HeaderValue;


fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut header_map = HeaderMap::new();
    let jwe_key = "jwe value";
    header_map.insert("jwe", HeaderValue::from_static(jwe_key));
    let res = client.get("http://10.0.36.112/role/admin")
        .headers(header_map)
        .send()
        .await?
        .text()
        .await?;
    println!("{:#?}", res);
    Ok(())
}
```

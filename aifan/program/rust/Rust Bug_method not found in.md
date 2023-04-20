# [Rust Bug] method not found in

```rust
error[E0599]: no method named `lines` found for enum `std::result::Result<std::string::String, std::io::Error>` in the current scope
  --> src\main.rs:20:25
   |
   |                         ^^^^^ method not found in `std::result::Result<std::string::String, std::io::Error>`

error: aborting due to previous error

For more information about this error, try `rustc --explain E0599`.
```

 你的输出或者输出，存在未处理的情况。如：

*   读文件，存在文件不可读的情况

*   转化u32, 存在不能转换的情况

*   读参数，存在参数没有的情况

加 

`expect`

 解决：

```rust
let content = std::fs::read_to_string(&args.path).expect("could not read file");
let pattern = std::env::args().nth(1).expect("no pattern given");
```

# [Rust 基础] 变量与可变性

```rust
// 开始

#![allow(unused_variables)]
fn main() {
    println!("Hello, world!");
    
    // 不可变性变量
    let lx = 1;
    println!("{}",lx);
    // 可变性变量
    let mut lmx = 5;
    println!("{}",lmx);
    lmx = 7;
    println!("{}",lmx);

    // 常量不光默认不能变，它总是不能变。作用域全局，值硬编码
    // 常量可以在任何作用域中声明，包括全局作用域
    const MAX_POINTS: u32 = 100000;
    println!("{}", MAX_POINTS);

    // 隐藏变量
    let x = 5;
    let x = x + 1;
    let x = x * 2;
    println!("The value of x is: {}", x);

    // let类型可改变， let mut类型不可改变
    let spaces = "   ";  // str
    let spaces = spaces.len(); // num


}

```

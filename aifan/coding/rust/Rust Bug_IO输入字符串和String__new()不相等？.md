# [Rust Bug] IO输入字符串和String\_\_new()不相等？

```rust
use std::io;

fn main() {
    let mut s1 = String::new();   
    let mut s2 = String::from("ss123");   
    io::stdin()
    	.read_line(&mut s1)
    	.expect("Failed to read line");
    println!("{}", s1 == s2); 
    println!("{}", s1.trim() == s2); 
    // Input ss123
    // Output false
    // Output true
}
```

为什么呢？？？ 因为多了 \r 和 \n

输入前

![rust1.png](<https://cdn.nlark.com/yuque/0/2020/png/133147/1588154075210-6654480c-95d1-4909-b2b5-60a688080317.png#align=left\&display=inline\&height=483\&margin=\[object Object]\&name=rust1.png\&originHeight=483\&originWidth=1151\&size=79057\&status=done\&style=none\&width=1151> "rust1.png")

输入值后

![rust2.png](<https://cdn.nlark.com/yuque/0/2020/png/133147/1588154076734-40239d38-f528-4a13-87c1-5f9e59d02a7c.png#align=left\&display=inline\&height=651\&margin=\[object Object]\&name=rust2.png\&originHeight=651\&originWidth=1114\&size=90825\&status=done\&style=none\&width=1114> "rust2.png")

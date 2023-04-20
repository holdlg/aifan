# [Rust 基础] 字符串

### 新建字符串

```rust
// 新建空字符串
let mut s = String::new();


-------------------------------------
let data = "initial contents";

let s = data.to_string();

// 该方法也可直接用于字符串字面值：
let s = "initial contents".to_string();

let s = String::from("initial contents");
```

### 更新字符串

```rust
// 追加
let mut s = String::from("foo");
s.push_str("bar");


let mut s1 = String::from("foo");
let s2 = "bar";
s1.push_str(s2);
println!("s2 is {}", s2);

let mut s = String::from("lo");
s.push('l');

// 使用 + 运算符
let s1 = String::from("Hello, ");
let s2 = String::from("world!");
let s3 = s1 + &s2; // 注意 s1 被移动了，不能继续使用


// 多个字符串
let s1 = String::from("tic");
let s2 = String::from("tac");
let s3 = String::from("toe");
let s = s1 + "-" + &s2 + "-" + &s3;

//  format!
let s1 = String::from("tic");
let s2 = String::from("tac");
let s3 = String::from("toe");
let s = format!("{}-{}-{}", s1, s2, s3);

```

**Rust 的字符串不支持索引**

\*\*

### 字符串 slice

```rust
let hello = "Здравствуйте";

let s = &hello[0..4];
```

### 循环字符串

```rust
for c in "नमस्ते".chars() {
    println!("{}", c);
}

for b in "नमस्ते".bytes() {
    println!("{}", b);
}
```

### String 与 \&str

*   \&str更像一个固定的数组，String像一个可变的数组。

*   String保留了一个len()和capacity()，但str只有一个len()。

*   \&str 是 str的一个的borrowed 类型，可以称为一个字符串切片，一个不可变的string。

### 字符串转换

String => \&str

```shell
let e = &String::from("Hello Rust");
// 或使用as_str()
let e_tmp = String::from("Hello Rust");
let e = e_tmp.as_str();
// 不能直接这样使用 
// let e = String::from("Hello Rust").as_str();
```

\&str => String

```shell
let c = a.to_string();
let d = String::from(b);
let d = a.to_owned();
```

String + \&str => String

```shell
let mut strs = "Hello".to_string();
// let mut strs = String::from("Hello");
strs.push_str(" Rust");
println!("{}", strs);
```

### 字符串对象常用的方法

| 方法                   | 原型                                                            | 说明                                                   |
| -------------------- | ------------------------------------------------------------- | ---------------------------------------------------- |
| `new()`              | pub const fn new() -> String                                  | 创建一个新的字符串对象                                          |
| `to_string()`        | fn to\_string(\&self) -> String                               | 将字符串字面量转换为字符串对象                                      |
| `replace()`          | pub fn replace<'a, P>(&'a self, from: P, to: \&str) -> String | 搜索指定模式并替换                                            |
| `as_str()`           | pub fn as\_str(\&self) -> \&str                               | 将字符串对象转换为字符串字面量                                      |
| `push()`             | pub fn push(\&mut self, ch: char)                             | 再字符串末尾追加字符                                           |
| `push_str()`         | pub fn push\_str(\&mut self, string: \&str)                   | 再字符串末尾追加字符串                                          |
| `len()`              | pub fn len(\&self) -> usize                                   | 返回字符串的字节长度                                           |
| `trim()`             | pub fn trim(\&self) -> \&str                                  | 去除字符串首尾的空白符                                          |
| `split_whitespace()` | pub fn split\_whitespace(\&self) -> SplitWhitespace           | 根据空白符分割字符串并返回分割后的迭代器                                 |
| `split()`            | pub fn split<'a, P>(&'a self, pat: P) -> Split<'a, P>         | 根据指定模式分割字符串并返回分割后的迭代器。模式 `P` 可以是字符串字面量或字符或一个返回分割符的闭包 |
| `chars()`            | pub fn chars(\&self) -> Chars                                 | 返回字符串所有字符组成的迭代器                                      |

这些方法的示例用法推荐访问：

[简单教程-Rust基础教程](https://www.twle.cn/c/yufei/rust/rust-basic-index.html "简单教程-Rust基础教程")

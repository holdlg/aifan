# [Rust 基础] vector

创建 vector

```rust
let v: Vec<i32> = Vec::new();

let v = vec![1, 2, 3];
```

更新 vector

```rust
let mut v = Vec::new();

v.push(5);
v.push(6);
v.push(7);
v.push(8);
```

读取 vector

```rust
let v = vec![1, 2, 3, 4, 5];

let third: &i32 = &v[2];
println!("The third element is {}", third);

match v.get(2) {
    Some(third) => println!("The third element is {}", third),
    None => println!("There is no third element."),
}
```

遍历 vector

```rust
let v = vec![100, 32, 57];
for i in &v {
    println!("{}", i);
}


let mut v = vec![100, 32, 57];
for i in &mut v {
    *i += 50;
}
```

使用枚举来储存多种类型

```rust
enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}

let row = vec![
    SpreadsheetCell::Int(3),
    SpreadsheetCell::Text(String::from("blue")),
    SpreadsheetCell::Float(10.12),
];
```

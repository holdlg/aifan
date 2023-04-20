# [Rust 基础] 复合类型

Rust 有两个原生的复合类型：元组（tuple）和数组（array）。

***

元组类型
元组长度固定：一旦声明，其长度不会增大或缩小。
元组中的每一个位置都有一个类型，而且这些不同值的类型也不必是相同的。

```rust
    let tup: (i32, f64, u8) = (500, 6.4, 1);

    // 解构
    let tup = (500, 6.4, 1);

    let (x, y, z) = tup;

    println!("The value of y is: {}", y);

   

```

使用点号（.）后跟

**值的索引**

来直接访问它们

```rust
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
```

***

数组类型

数组中的每个元素的类型必须相同。
Rust 中的数组是固定长度的：一旦声明，它们的长度不能增长或缩小。

```rust
    let a = [1, 2, 3, 4, 5];
    let months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];


    // i32 是每个元素的类型。分号之后，数字 5 表明该数组包含五个元素
    let a: [i32; 5] = [1, 2, 3, 4, 5];

    // 每个元素都相同的数组，可以在中括号内指定其初始值，后跟分号，再后跟数组的长度
    let a = [3; 5];
    let a = [3, 3, 3, 3, 3]


    // 访问数组
    let a = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];
```

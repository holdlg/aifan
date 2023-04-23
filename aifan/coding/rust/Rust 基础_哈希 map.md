# [Rust 基础] 哈希 map

创建一个

`HashMap`

类似于 vector，哈希 map 是同质的：所有的键必须是相同类型，值也必须都是相同类型。

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);



--------------------------------------------
use std::collections::HashMap;

let teams  = vec![String::from("Blue"), String::from("Yellow")];
let initial_scores = vec![10, 50];

let scores: HashMap<_, _> = teams.iter().zip(initial_scores.iter()).collect();
```

\[### 哈希 map 和所有权

]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%93%88%E5%B8%8C-map-%E5%92%8C%E6%89%80%E6%9C%89%E6%9D%83)\`i32\` 这样的实现了 \`Copy\` trait](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%93%88%E5%B8%8C-map-%E5%92%8C%E6%89%80%E6%9C%89%E6%9D%83\)`i32` 这样的实现了 `Copy` trait "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%93%88%E5%B8%8C-map-%E5%92%8C%E6%89%80%E6%9C%89%E6%9D%83)`i32` 这样的实现了 `Copy` trait")

&#x20;的类型，其值可以拷贝进哈希 map
 

`String`

 这样拥有所有权的值，其值将被移动而哈希 map 会成为这些值的所有者\[

```rust

use std::collections::HashMap;

let field_name = String::from("Favorite color");
let field_value = String::from("Blue");

let mut map = HashMap::new();
map.insert(field_name, field_value);
// 这里 field_name 和 field_value 不再有效，
// 尝试使用它们看看会出现什么编译错误！
```

]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%93%88%E5%B8%8C-map-%E5%92%8C%E6%89%80%E6%9C%89%E6%9D%83](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%93%88%E5%B8%8C-map-%E5%92%8C%E6%89%80%E6%9C%89%E6%9D%83 "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%93%88%E5%B8%8C-map-%E5%92%8C%E6%89%80%E6%9C%89%E6%9D%83")

)

访问哈希map的值

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);

let team_name = String::from("Blue");
let score = scores.get(&team_name);
```

遍历哈希map的值

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);

for (key, value) in &scores {
    println!("{}: {}", key, value);
}
```

\[### 更新哈希 map

]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map)\[####](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map\)\[#### "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map)\[####")

&#x20;覆盖一个值
]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC)\[](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC\)\[ "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC)\[")

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Blue"), 25);

println!("{:?}", scores);
```

]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map)\[](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map\)\[ "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map)\[")

]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC)\[####](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC\)\[#### "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC)\[####")

&#x20;只在键没有对应值时插入
]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%8F%AA%E5%9C%A8%E9%94%AE%E6%B2%A1%E6%9C%89%E5%AF%B9%E5%BA%94%E5%80%BC%E6%97%B6%E6%8F%92%E5%85%A5)\[####](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%8F%AA%E5%9C%A8%E9%94%AE%E6%B2%A1%E6%9C%89%E5%AF%B9%E5%BA%94%E5%80%BC%E6%97%B6%E6%8F%92%E5%85%A5\)\[#### "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E5%8F%AA%E5%9C%A8%E9%94%AE%E6%B2%A1%E6%9C%89%E5%AF%B9%E5%BA%94%E5%80%BC%E6%97%B6%E6%8F%92%E5%85%A5)\[####")

]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC)\[\`\`\`rust](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC\)\[```rust "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC)\[```rust")

use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("Blue"), 10);

scores.entry(String::from("Yellow")).or\_insert(50);
scores.entry(String::from("Blue")).or\_insert(50);

println!("{:?}", scores);

````



](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map)[#### 根据旧值更新一个值
](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%A0%B9%E6%8D%AE%E6%97%A7%E5%80%BC%E6%9B%B4%E6%96%B0%E4%B8%80%E4%B8%AA%E5%80%BC)[#### 
](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC)如果是第一次看到某个单词，就插入值 `0`[#### 
](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC)[```rust

use std::collections::HashMap;

let text = "hello world wonderful world";

let mut map = HashMap::new();

for word in text.split_whitespace() {
    let count = map.entry(word).or_insert(0);
    *count += 1;
}

println!("{:?}", map);
````

]\(

[https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map](https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map "https://kaisery.github.io/trpl-zh-cn/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map")

)

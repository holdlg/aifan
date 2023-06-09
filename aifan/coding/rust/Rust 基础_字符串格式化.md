# [Rust 基础] 字符串格式化

*   `print!`将格式化文本输出到控制台，不带换行符。

*   `println!`将格式化文本输出到控制到，末尾加一个换行符。

*   `format!`将格式化文本输出到字符串。

```shell
println!("{}, {}", "Hello", "world");
println!("{0}, this is {1}. {1}, this is {0}.", "Hellen", "Tom");
println!("{subject} {verb} {object}", object="the lazy dog", subject="the quick brwon fox", verb="jumps over");
```

```
| \* 数字 \*     | \* Rust格式 \* | \* Python格式 \* | \* 输出 \*           | \* 描述 \*          |
| ------------ | ------------ | -------------- | ------------------ | ----------------- |
| 3.1415926    | {:.2}        | {:.2f}         | 3.14               | 保留小数点后两位          |
| 3.1415926    | {:+.2}       | {:+.2f}        | +3.14              | 带符号保留小数点后两位       |
| -1           | {:+.2}       | {:+.2f}        | -1(R)/-1.00(P)     | 带符号保留小数点后两位       |
| -1.0         | {:+.2}       | {:+.2f}        | -1.00              | 带符号保留小数点后两位       |
| 2.71828      | {:.0}}       | {:.0f}         | 3                  | 不带小数              |
| 5            | {:0>2}/{:02} | {:0>2d}/{:02d} | 05                 | 数字补0 (填充左边, 宽度为2) |
| 5            | {:x^10}      | {:x^10d}       | xxxx5xxxxx         | 居中对齐              |
| 5            | {:x<4}       | {:x<4d}        | 5xxx               | 数字补x (填充右边, 宽度为4) |
| 1000000      | NA.          | {:,}           | 1,000,000          | 以逗号分隔的数字格式        |
| 0.25         | NA.          | {:.2%}         | 25.00%             | 百分比格式             |
| 1000000000   | NA.          | {:.2e}         | 1.00e+09           | 指数记法              |
| 1000000000.0 | {:2e}        | {:.2e}         | 1e9(R)/1.00e+09(P) | 指数记法              |
| 1000000000.0 | {:2E}        | {:.2E}         | 1E9(R)/1.00E+09(P) | 指数记法              |
| 42           | {:b}         | {:b}           | 101010             | 二进制               |
| 42           | {:o}         | {:o}           | 52                 | 八进制               |
| 42           | {:x}         | {:x}           | 2a                 | 十六进制              |
| 42           | {:X}         | {:X}           | 2A                 | 十六进制              |
| 42           | {:#b}        | {:#b}          | 0b101010           | 带前缀的二进制           |
| 42           | {:#o}        | {:#o}          | 0o52               | 带前缀的八进制           |
| 42           | {:#x}        | {:#x}          | 0x2a               | 带前缀的十六进制          |
| 42           | {:#X}        | {:#X}          | 0x2A(R)/0X2A(P)    | 带前缀的十六进制          |
```
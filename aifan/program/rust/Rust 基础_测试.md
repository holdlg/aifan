# [Rust 基础] 测试

# test

```
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

# assert,assert\_eq,assert\_ne

# 自定义失败信息

# 测试错误是否执行

should\_panic

# 将 Result\<T, E> 用于测试

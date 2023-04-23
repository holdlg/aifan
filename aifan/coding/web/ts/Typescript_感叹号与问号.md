# [Typescript] 感叹号与问号

```bash
# 仅讨论在变量上使用！和？

class A {
  name?: string //可能没有name字段
  age!: number //肯定有age,编译器不需要去判断
}

person?.name?.firstName 可以理解成 person && person.name && person.firstName


```

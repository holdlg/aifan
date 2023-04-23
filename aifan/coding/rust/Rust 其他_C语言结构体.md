# [Rust 其他] C语言结构体

1.  编译的四个步骤

预处理   *.c文件生成* .i文件
编译  

*.i文件生成*

.s文件
汇编  &#x20;

*.s文件生成*

.o 文件
连接   \*.o文件生成可执行文件

Gcc -o helloword.i helloword.c -E
\-E 预处理后终止编译

1.  宏

预处理时进行文本替换

\#define M 10
\#define add(a,b) (a+b)

末尾没有分号，非c语法，文件内全局作用域

1.  Typedef

Typedef struct stud{} sutd\_t

1.  结构体
```
Struct student {
Char\[20] name;
Int age;
Int Height;
}

Struct student std = {‘wc’, 12, 129}
Printf(

[std.name](http://std.name "std.name")

)
```
1.  数组结构体
```
Struct student students\[2] = {{‘wc’, 12, 129},{‘wc’, 12, 129}}

Students\[0].name
Students\[1].name
```
5.结构体指针变量
```
Struct student \* s;
S = \&std
一下3种方式相同， ->是 指向运算符
(\* S).name
S -> name
Std.nam
```
6.数组结构体指针变量
默认指向第一个元素的值

然后需要做指针的位移操作（指针的++操作），去取连续的值

# [Rust 其他] C语言指针与内存

C
Note

# 文件

hello.c  # 源文件
hello.o  # 编译后二进制文件
hello.h  # 声明hello.o文件，hello.o 无法查看

# include

系统目录下查找，是标准库
\#include \<stdio.h>

当前目录下查找，自定义库， 每次都会编译
\#include “mycfile.c”

当前目录下查找，自定义库,  已编译好的二进制文件，不重新编译
\#include “mycfile.o”

当前目录下查找，自定义库, 同mycfile.o, 方便查看
\#include “mycfile.h”

# main 函数

/\*
入口函数
返回Int 类型，等于 0表示程序 执行完成，不等于0 表示执行异常， echo \$? 查看执行结果
\*/

Int main()
{
return 0;
}

# 编译环境

cc -v
gcc -v

# makefile

Makefile 是编译时的配置文件，需要自己书写，使用 make 命令编译

# &&

链接执行多个命令，左边命令执行成功后，执行右边命令

./a.out && ls && ls -l

# 输入流，输出流，错误流

stdin  默认设备键盘
stdout 默认设备显示器
stderr

printf(“hello world!”);
等于
fprintf(stdout, “hello world!”);

printf(“this is error.”);
等于封装
fprintf(stderr, “this is error”);

Int a;
scanf(“input number”, \&a)
等于封装
fscanf(stdin, “input number”, \&a)

# 重定向

输出流重定向： ./a.out  1>> a.txt     1 代表默认输出流，可不写， >> 会追加文本， > 重新写新的文本
输入流重定向：./a.out < input.txt   会使用input.txt 数据作为默认的输入值
错误流重定向：./a.out  2>> a.txt     2代表默认错误流， >> 会追加文本， > 重新写新的文本

可分别导入导出：./a.out 1>>out.txt 2>>err.txt \<input.txt

# 管道

count | avg

Count的结果作为输入流 传给 avg

# 指针

Int&#x20;

*a  指针类型，*

&#x20;表示去a的地址找值

void change(int \*a)
{
}

Int main()
{

# 传递指针类型C语言指针与内存

change(\&a)
}

# gdb

$gcc -g main.c -o main.out$

&#x20;gdb ./main.out

l 查看源代码
Start 开始单步调试

N 下一行
P  变量 输出变量

S 进入函数

Q 退出

Bt 查看栈

# 进制

二进制 满 2进一     1+1 = 10 + 1 = 11 + 1 = 100
十进制 满 10 进一  8+1 = 9 + 1 = 10
十六进制 满 16 进一  E + 1 = F + 1 = 10 + 1 = 11 + F = 20 + F = 2F +1 = 30

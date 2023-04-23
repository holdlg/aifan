# [Python 代码块] 25 个Python 代码段

来源：

[https://www.infoq.cn/article/RoiUfiWxrT4xyS1dBKuh](https://www.infoq.cn/article/RoiUfiWxrT4xyS1dBKuh "https://www.infoq.cn/article/RoiUfiWxrT4xyS1dBKuh")

Python 是一种通用的高级编程语言。用它可以做许多事，比如开发桌面 GUI 应用程序、网站和 Web 应用程序等。
并且，通过处理常见的编程任务，Python 能让开发者专注应用程序的核心功能。此外，Python 语言的简单语法规则进一步简化了代码库的可读性和应用程序的可维护性。
与其他编程语言相比，Python 的优势在于：

1.  与主要平台和操作系统兼容；

2.  有许多开源框架和工具；

3.  代码具备可读性和可维护性；

4.  健壮的标准库；

5.  标准测试驱动开发

在本文，我将介绍 25 个简短且有用的代码段，它们可以帮你完成日常任务。

## 1. 在两个变量之间交换值

在其他语言中，要在两个变量间交换值而不是用第三个变量，我们要么使用算术运算符，要么使用位异或（Bitwise XOR）。在 Python 中，它就简单多了，如下所示。
复制代码

```python
a = 5
b = 10
a,b = b,a
print(a) # 10
print(b) # 5
```

## 2. 检查给定的数字是否为偶数

如果给定的数字为偶数，则如下函数返回&#x20;

`Ture`

，否则返回&#x20;

`False`

。
复制代码

```python
def is_even(num):
return num % 2 == 0
is_even(10) # True
```

## 3. 将多行字符串拆分为行列表

以下函数可用于将多行字符串拆分为行列表。
复制代码

```
def split_lines(s):
return s.split('\n')
split_lines('50\n python\n snippets') # ['50', ' python', ' snippets']
```

## 4. 查找对象使用的内存

标准库的 sys 模块提供了&#x20;

`getsizeof()`

&#x20;函数。该函数接受一个对象，调用对象的&#x20;

`sizeof()`

&#x20;方法，并返回结果，这样做能使对象可检查。
复制代码

```
import sys
print(sys.getsizeof(5)) # 28
print(sys.getsizeof("Python")) # 55
```

## 5. 反转字符串

Python 字符串库不像其他 Python 容器（如&#x20;

`list`

) 那样支持内置的&#x20;

`reverse()`

。反转字符串有很多方法，其中最简单的方法是使用切片运算符（slicing operator）。
复制代码

```
language = "python"
reversed_language = language[::-1]
print(reversed_language) # nohtyp
```

## 6. 打印字符串 n 次

在不使用循环的情况下，要打印一个字符串 n 次是非常容易的，如下所示。
复制代码

```
def repeat(string, n):
return (string * n)
repeat('python', 3) # pythonpythonpython
```

## 7. 检查字符串是否为回文

以下函数用于检查字符串是否为回文。
复制代码

```
def palindrome(string):
return string == string[::-1]
palindrome('python') # False
```

## 8. 将字符串列表合并为单个字符串

下面的代码段将字符串列表组合成单个字符串。
复制代码

```
strings = ['50', 'python', 'snippets']
print(','.join(strings)) # 50,python,snippets
```

## 9. 查找列表的第一个元素

此函数返回所传递列表的第一个元素。
复制代码

```
def head(list):
return list[0]
print(head([1, 2, 3, 4, 5])) # 1
```

## 10. 查找存在于两个列表中任一列表存在的元素

此函数返回两个列表中任一列表中的每个元素。
复制代码

```
def union(a,b):
return list(set(a + b))
union([1, 2, 3, 4, 5], [6, 2, 8, 1, 4]) # [1,2,3,4,5,6,8]
```

## 11. 查找给定列表中的所有唯一元素

此函数返回给定列表中存在的唯一元素。
复制代码

```
def unique_elements(numbers):
return list(set(numbers))
unique_elements([1, 2, 3, 2, 4]) # [1, 2, 3, 4]
```

## 12. 求一组数字的平均值

此函数返回列表中两个或多个数字的平均值。
复制代码

```
def average(*args):
return sum(args, 0.0) / len(args)
average(5, 8, 2) # 5.0
```

## 13. 检查列表是否包含所有唯一值

此函数检查列表中的所有元素是否都是唯一的。
复制代码

```
def unique(list):
if len(list)==len(set(list)):
print("All elements are unique")
else:
print("List has duplicates")
unique([1,2,3,4,5]) # All elements are unique
```

## 14. 跟踪列表中元素的频率

Python 计数器跟踪容器中每个元素的频率。&#x20;

`Counter()`

&#x20;返回一个以元素为键、以其出现频率为值的字典。
复制代码

```
from collections import Counter
list = [1, 2, 3, 2, 4, 3, 2, 3]
count = Counter(list)
print(count) # {2: 3, 3: 3, 1: 1, 4: 1}
```

## 15. 查找列表中最常用的元素

此函数返回列表中出现频率最高的元素。
复制代码

```
def most_frequent(list):
return max(set(list), key = list.count)
numbers = [1, 2, 3, 2, 4, 3, 1, 3]
most_frequent(numbers) # 3
```

## 16. 将角度转换为弧度

下面的函数用于将角度转换为弧度。
复制代码

```
import math
def degrees_to_radians(deg):
return (deg * math.pi) / 180.0
degrees_to_radians(90) # 1.5707963267948966
```

## 17. 计算执行一段代码所需的时间

以下代码段用于计算执行一段代码所需的时间。
复制代码

```
import time
start_time = time.time()
a,b = 5,10
c = a+b
end_time = time.time()
time_taken = (end_time- start_time)*(10**6)
print("Time taken in micro_seconds:", time_taken) # Time taken in micro_seconds: 39.577484130859375
```

## 18. 查找数字列表的最大公约数

此函数计算数字列表中的最大公约数。
复制代码

```
from functools import reduce
import math
def gcd(numbers):
return reduce(math.gcd, numbers)
gcd([24,108,90]) # 6
```

## 19. 查找字符串中的唯一字符

此代码段可用于查找字符串中的所有唯一字符。
复制代码

```
string = "abcbcabdb"
unique = set(string)
new_string = ''.join(unique)
print(new_string) # abcd
```

## 20. 使用 lambda 函数

Lambda 是一个匿名函数，它只能保存一个表达式。
复制代码

```
x = lambda a, b, c : a + b + c
print(x(5, 10, 20)) # 35
```

## 21. 使用映射函数

此函数在将给定函数应用于给定迭代的每个项（列表、元组等）之后，返回一个结果列表。
复制代码

```
def multiply(n):
return n * n
list = (1, 2, 3)
result = map(multiply, list)
print(list(result)) # {1, 4, 9}
```

## 22. 使用筛选函数

```
arr = [1, 2, 3, 4, 5]
arr = list(filter(lambda x : x%2 == 0, arr))
print (arr) # [2, 4]
```

## 23. 使用列表解析

列表解析（list comprehensions）为我们提供了一种基于某些迭代创建列表的简单方法。在创建过程中，可以将来自可迭代的元素有条件地包含到新列表中，并根据需要进行转换。
复制代码

```
numbers = [1, 2, 3]
squares = [number**2 for number in numbers]
print(squares) # [1, 4, 9]
```

## 24. 使用切片运算符

切片（Slicing）用于从给定序列中提取连续的元素序列或子序列。下面的函数用于连接两个切片运算的结果。首先，我们将列表从索引&#x20;

`d`

&#x20;切片到末尾，然后从开头切片到索引&#x20;

`d`

。
复制代码

```
def rotate(arr, d):
return arr[d:] + arr[:d]
if __name__ == '__main__':
arr = [1, 2, 3, 4, 5]
arr = rotate(arr, 2)
print (arr) # [3, 4, 5, 1, 2]
```

## 25. 使用函数链式调用

最后的代码段用于从一行调用多个函数并计算结果。
复制代码

```
def add(a, b):
return a + b
def subtract(a, b):
return a - b
a, b = 5, 10
print((subtract if a > b else add)(a, b)) # 15
```

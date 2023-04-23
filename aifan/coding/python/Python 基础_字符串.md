# [Python 基础] 字符串

```python

字符串中字符大小写的变换：
s.lower() #小写
s.upper() #大写
s.swapcase() #大小写互换
s.capitalize() #首字母大写
string.capwords(s)#这是模块中的方法
s.title() #只有首字母大写，其余为小写，模块中没有这个方法

字符串在输出时的对齐：
s.ljust(width,[fillchar])
#输出width个字符，s左对齐，不足部分用fillchar填充，默认的为空格。
s.rjust(width,[fillchar]) #右对齐
s.center(width, [fillchar]) #中间对齐
s.zfill(width) #把s变成width长，并在右对齐，不足部分用0补足

字符串中的搜索和替换：
s.find(substr, [start, [end]])
#返回s中出现substr的第一个字母的标号，如果s中没有substr则返回-1。start和end作用就相当于在s[start:end]中搜索
s.index(substr, [start, [end]])
#与find()相同，只是在s中没有substr时，会返回一个运行时错误
s.rfind(substr, [start, [end]])
#返回s中最后出现的substr的第一个字母的标号，如果s中没有substr则返回-1，也就是说从右边算起的第一次出现的substr的首字母标号
s.rindex(substr, [start, [end]])
s.count(substr, [start, [end]]) #计算substr在s中出现的次数
s.replace(oldstr, newstr, [count])
#把s中的oldstar替换为newstr，count为替换次数。这是替换的通用形式，还有一些函数进行特殊字符的替换
s.strip([chars])
#把s中前后chars中有的字符全部去掉，可以理解为把s前后chars替换为None
s.lstrip([chars])
s.rstrip([chars])
s.expandtabs([tabsize])
#把s中的tab字符替换没空格，每个tab替换为tabsize个空格，默认是8个

字符串的分割和组合：
s.split([sep, [maxsplit]])
#以sep为分隔符，把s分成一个list。maxsplit表示分割的次数。默认的分割符为空白字符
s.rsplit([sep, [maxsplit]])
s.splitlines([keepends])
#把s按照行分割符分为一个list，keepends是一个bool值，如果为真每行后而会保留行分割符。
s.join(seq) #把seq代表的序列──字符串序列，用s连接起来


字符串的mapping，这一功能包含两个函数：
string.maketrans(from, to)
#返回一个256个字符组成的翻译表，其中from中的字符被一一对应地转换成to，所以from和to必须是等长的。
s.translate(table[,deletechars])
# 使用上面的函数产后的翻译表，把s进行翻译，并把deletechars中有的字符删掉。需要注意的是，如果s为unicode字符串，那么就不支持 deletechars参数，可以使用把某个字符翻译为None的方式实现相同的功能。此外还可以使用codecs模块的功能来创建更加功能强大的翻译表。

字符串还有一对编码和解码的函数：
s.encode([encoding,[errors]])
# 其中encoding可以有多种值，比如gb2312 gbk gb18030 bz2 zlib big5 bzse64等都支持。errors默认值为"strict"，意思是UnicodeError。可能的值还有'ignore', 'replace', 'xmlcharrefreplace', 'backslashreplace' 和所有的通过codecs.register_error注册的值。这一部分内容涉及codecs模块，不是特明白
s.decode([encoding,[errors]])

字符串的测试函数，这一类函数在string模块中没有，这些函数返回的都是bool值：
s.startwith(prefix[,start[,end]])
#是否以prefix开头
s.endwith(suffix[,start[,end]])
#以suffix结尾
s.isalnum()
#是否全是字母和数字，并至少有一个字符
s.isalpha() #是否全是字母，并至少有一个字符
s.isdigit() #是否全是数字，并至少有一个字符
s.isspace() #是否全是空白字符，并至少有一个字符
s.islower() #s中的字母是否全是小写
s.isupper() #s中的字母是否便是大写
s.istitle() #s是否是首字母大写的


字符串类型转换函数，这几个函数只在string模块中有：
string.atoi(s[,base])
#base默认为10，如果为0,那么s就可以是012或0x23这种形式的字符串，如果是16那么s就只能是0x23或0X12这种形式的字符串
string.atol(s[,base]) #转成long
string.atof(s[,base]) #转成float
```

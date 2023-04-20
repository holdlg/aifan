# [Javascript] 字符串转集合去空去重

```
 # 换行符分割字符串
 const target = ""
 const targetList = target.split(/[\s\n]/)
 
 # 去空
 targetList = targetList.filter((i) => i)
 
 # 去重
 targetSet = new Set(targetList)
 
 # 转array
 targetList = Array.from(targetSet)
 
 # 合并写法
 targetList = Array.from(new Set(target.split(/[\s\n]/).filter((i) => i)))
```

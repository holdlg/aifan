# [Python 基础] class 内置\_特殊函数

| ​**init**(self,...)         | 初始化对象，在创建新对象时调用                           |
| --------------------------- | ----------------------------------------- |
| ​**del**(self)              | 释放对象，在对象被删除之前调用                           |
| ​**new**(cls,*args,* \*kwd) | 实例的生成操作                                   |
| ​**str**(self)              | 在使用print语句时被调用                            |
| ​**getitem**(self,key)      | 获取序列的索引key对应的值，等价于seq\[key]               |
| ​**len**(self)              | 在调用内联函数len()时被调用                          |
| ​**cmp**(stc,dst)           | 比较两个对象src和dst                             |
| ​**getattr**(s,name)        | 获取属性的值                                    |
| ​**setattr**(s,name,value)  | 设置属性的值                                    |
| ​**delattr**(s,name)        | 删除name属性                                  |
| ​**getattribute**()         | ​**getattribute**()功能与\_\_getattr\_\_()类似 |
| ​**gt**(self,other)         | 判断self对象是否大于other对象                       |
| ​**lt**(slef,other)         | 判断self对象是否小于other对象                       |
| ​**ge**(slef,other)         | 判断self对象是否大于或者等于other对象                   |
| ​**le**(slef,other)         | 判断self对象是否小于或者等于other对象                   |
| ​**eq**(slef,other)         | 判断self对象是否等于other对象                       |
| ​**call**(self,\*args)      | 把实例对象作为函数调用                               |

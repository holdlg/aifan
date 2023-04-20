# [ElasticSearch7] 查询关键字说明

```bash
基本查询：最简单的查询方式

query：{“term”：{“title”：“crime”}}

terms：目标列包含指定词

match：会把输入的“短语”进行分解成词

bool match：match分解成多个词，并且是and的关系，默认是or的关系

match phrase：分词，但是要指定分词之间词语的个数

match phrase prefix：

multi match：作用于多个字段的match查询

query string：支持lucence查询语法，title:crime^10+title:punishment-otitle:cat，用+-表示include和exclude，用^表示权重

field查询：是queyr查询的简化版本

ids查询：field查询的特殊情况，只针对id

prefix查询：类似于term查询，但是不是全部匹配

fuzzy like this查询：查询相似的文本，怎么计算相似度呢？

fuzzy like this field查询：选定title

fuzzy查询：模糊查询，根据词语之间的编辑距离得到

wildcard查询：使用* ？的term查询

more like this：like且设定好范围

range：数字范围查询，from to

查询重写？？？

------------------------------------------------

过滤查询 ，对查询结果进行过滤

filter：term{“year”：1981}，过滤结果中year为1981的数据

filter：range ：过滤结果中指定列在指定范围的数据

filter：exists ：结果中存在某列的数据

filter：missing ：结果中缺失某列的数据

filter：scripts：bool表达式 ：结果中满足脚本指定条件的数据

filter：type ：类型过滤

filter：limit ：限定一定数量的结果

filter：ids ：限定特殊的id集合

filter：not，and，or ：多个条件的组合

-----------------------------------

组合查询 ：多个条件的组合查询

bool：{“must”：{查询1}，“should”：{查询2}}

boosting：将多个查询封装起来，positive的分数增高，negative分数降低

costant score：恒定分数

indices：在多个索引上查询

custom filters score：

-------------------------

对查询结果进行排序

“sort”：{“a”：“desc”}
```

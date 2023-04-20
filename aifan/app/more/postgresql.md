# postgresql


## 查看序列-
```sql
-- r =普通表， i =索引，S =序列，v =视图，m =物化视图， c =复合类型，t = TOAST表，f =外部表

select * from pg_class where relkind='S'
```
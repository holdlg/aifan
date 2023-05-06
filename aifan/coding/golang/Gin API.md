# Gin API


## formdata

| 查询参数| Form表单	| 说明| 
| ------ | ------ | ------ |
| Query | PostForm | 获取key对应的值，不存在为空字符串 |
| GetQuery | GetPostForm | 多返回一个key是否存在的结果 |
| QueryArray | PostFormArray | 获取key对应的数组，不存在返回一个空数组 |
| GetQueryArray | GetPostFormArray | 多返回一个key是否存在的结果 |
| QueryMap | PostFormMap | 获取key对应的map，不存在返回空map |
| GetQueryMap | GetPostFormMap | 多返回一个key是否存在的结果 |
| DefaultQuery | DefaultPostForm | key不存在的话，可以指定返回的默认值 |
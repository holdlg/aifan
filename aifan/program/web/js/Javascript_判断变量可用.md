# [Javascript] 判断变量可用

在javascript中

`undefined`

,&#x20;

`null`

,&#x20;

`0`

,&#x20;

`NaN`

, 或

`空字符串 ("")`

&#x20;都为标识为false，所以：

```javascript
var fir;
if(fir) {
  console.log('fir不为空') // fir的值为 非0，长度大于1的字符
} else {
  console.log('fir为空') // fir的值是undefined, null, 0, NaN, 或"" 
}

// 此方法不能判断对象如：{},[]
```

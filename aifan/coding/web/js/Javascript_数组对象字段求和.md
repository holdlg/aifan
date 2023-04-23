# [Javascript] 数组对象字段求和

```javascript
const data = [
  {"age":10, "name": "掌声"},
  {"age":20, "name": "掌声"},
  {"age":30, "name": "掌声"}
]
let init = 0; // 初始值
// accumulator 累加器
// currentValue 当前对象
let total = data.reduce((accumulator,currentValue) => {
  return accumulator + currentValue['age']
}, init)
console.log(total); // 60
```

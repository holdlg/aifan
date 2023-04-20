# [Javascript] 异步演进

异步>callback>promise>async/await

起初需要异步执行。发明了回调callback，代码写起来遇到了回调地狱/厄运金字塔/无限缩进，代码向右扩展。发明promise，promise完美实现异步，代码向下扩展。but人的思维在判断代码运行到哪里了，还是不方便。那好吧，async/await出世，同步思维写异步代码。

你不能执行， 得等我执行完了，你才能执行

```javascript
// a.js
function a() {}

// index_error.html
// 先加载完a.js
<script src="a.js"></script>
// 在执行a()
<script>
  a()
</script>

// 上面的代码是错误的，找不到a()
```

回调地狱，厄运金字塔

参考链接：

[https://zh.javascript.info/callbacks](https://zh.javascript.info/callbacks "https://zh.javascript.info/callbacks")

动态加载js

```javascript
// a.js
src = a.js

function loadScript(src, callback) {
  // 创建一个script标签
  let script = document.createElement('script');
  // 设置src
  script.src = src;

  // 设置加载成功之后执行callback
  script.onload = () => callback(null, script);
  // 设置加载失败之后执行callback
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  // 脚本写人html dom
  document.head.append(script);
}
```

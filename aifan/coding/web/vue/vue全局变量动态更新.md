# vue全局变量动态更新

虽然这样可以，但建议用pinia, 原理是一样的，都是reactive

## main.ts
```ts
import { reactive } from 'vue'
app.config.globalProperties.$opMap = reactive({ operate: {} })
```

## src/curd.d.ts

```ts
import { vue } from 'vue'
import { ComponentCustomProperties } from '@vue/runtime-core'

declare module 'vue' {
  interface ComponentCustomProperties {
    $opMap: { operate: { [key: string]: any } }
  }
}
export default ComponentCustomProperties

```

## 动态更新和读取

更新
```
let proxy = getCurrentInstance()!.proxy!
proxy.$opMap.operate = opMap
console.log(proxy.$opMap)
```

读取
```
  let opMap = getCurrentInstance()?.proxy!.$opMap!
  console.log(opMap.operate)
```
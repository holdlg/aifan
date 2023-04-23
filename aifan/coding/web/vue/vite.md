# vite

## create vue

```shell
npm create vite@latest

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue
npm create vite@latest my-vue-app -- --template vue-ts


```

## 安装依赖

```sh
npm install vue-router@4
npm install -D naive-ui @vicons/ionicons5

```

## 可选依赖

```sh
npm install pinia
```

## 安装 Tailwindcss

```sh
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

vi tailwind.config.js

```

```js
/* vi tailwind.config.js  */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

```css
/* vi ./src/assets/tailwind.css  */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 单文件开发规范

```js
<script setup lang="ts">
/*
 * ! 组件导入
 */

/*
* ! 全局变量声明
*/

/*
* ! 数据结构模型
*/

/*
* ! 数据获取与渲染
*/

/*
* ! 表单设计与提交
*/
</script>
<template>
</template>
<style>
</style>
```

## 短路径配置

npm install -D @types/node

```ts
/* vi vite.config.ts */

// 来自@types/node
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

```json
/*  vi tsconfig.json */

{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "compilerOptions": {
    "baseUrl": ".",

    // 重点关注paths，与vite.config.ts的resolve.alias的路径保持一致
    // 添加paths配置，ts路径检查
    "paths": {
      "@/*": ["./src/*"]
    }
    //
  },

  "references": [
    {
      "path": "./tsconfig.config.json"
    }
  ]
}
```

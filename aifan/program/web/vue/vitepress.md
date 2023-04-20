# vitepress
文档博客

## pnpm
```bash
mkdir myproject

cd myproject

pnpm init

pnpm add -D vitepress vue


```

add package.json
```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}

```
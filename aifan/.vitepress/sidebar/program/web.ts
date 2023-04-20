export default function programWeb() {
  return [
    {
      text: 'Vue',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'vue部署配置', link: '/program/web/vue/vue部署配置' },
        { text: 'Vite', link: '/program/web/vue/vite' },
        { text: 'Vitepress', link: '/program/web/vue/vitepress' }
      ]
    },
    {
      text: 'Typescript',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Typescript 知识导图', link: '/program/web/ts/Typescript_Typescript 知识导图' },
        { text: '类函数装饰器', link: '/program/web/ts/Typescript_类函数装饰器' },
        { text: '感叹号与问号', link: '/program/web/ts/Typescript_感叹号与问号' }
      ]
    },
    {
      text: 'Nodejs',
      collapsible: true,
      collapsed: true,
      items: [{ text: '更新镜像地址', link: '/program/web/node/Node_更新镜像地址' }]
    },
    {
      text: 'Javascript',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'HLS流网页播放', link: '/program/web/js/Javascript_HLS流网页播放' },
        { text: '数组对象字段求和', link: '/program/web/js/Javascript_数组对象字段求和' },
        { text: '异步演进', link: '/program/web/js/Javascript_异步演进' },
        { text: '判断变量可用', link: '/program/web/js/Javascript_判断变量可用' },
        { text: 'DOM 修改文档', link: '/program/web/js/Javascript_DOM 修改文档' },
        { text: '冒泡和捕获', link: '/program/web/js/Javascript_冒泡和捕获' },
        { text: '浏览器事件', link: '/program/web/js/Javascript_浏览器事件' },
        { text: '字符串转集合去空去重', link: '/program/web/js/Javascript_字符串转集合去空去重' }
      ]
    }
  ]
}

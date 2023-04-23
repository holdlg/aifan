import { defineConfig } from 'vitepress'

import { appElasticsearch, appPulsar, appMore, appGit } from './sidebar/app'
import { devopsDocker, devopsKubernets } from './sidebar/devops'
import { osCentOS, osUbuntu, osWindows } from './sidebar/os'
import { codingPython, codingRust, codingGolang, codingWeb } from './sidebar/coding'
import { orange } from './sidebar/orange'

export default defineConfig({
  base: '/aifan/',
  title: '爱反垃圾堆',
  titleTemplate: ':title 🌱 菲艾若芭',
  lang: 'zh-CN',
  lastUpdated: true,

  themeConfig: {
    siteTitle: '爱反垃圾堆',
    outlineTitle: '内容导航',
    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav: nav(),

    sidebar: {
      '/devops/docker/': devopsDocker(),
      '/devops/kubernetes/': devopsKubernets(),
      '/app/elastic/': appElasticsearch(),
      '/app/pulsar/': appPulsar(),
      '/app/git/': appGit(),
      '/app/more/': appMore(),
      '/coding/golang/': codingGolang(),
      '/coding/python/': codingPython(),
      '/coding/rust/': codingRust(),
      '/coding/web/': codingWeb(),
      '/os/centos/': osCentOS(),
      '/os/ubuntu/': osUbuntu(),
      '/os/windows/': osWindows(),
      '/orange/': orange()
    },

    footer: {
      message: '路虽远，行则将至',
      copyright: '版权 © 2023 <a href="https://dev.zmsk.co/" target="_blank">dev.zmsk.co</a>'
    }
  }
})

function nav() {
  return [
    { text: '首页 🎀', link: '/index.md', activeMatch: '/home/' },
    {
      text: 'DevOps 🐦',
      items: [
        {
          text: 'Kubernetes',
          link: '/devops/kubernetes/index.md'
        },
        {
          text: 'Docker',
          link: '/devops/docker/index.md'
        }
      ]
    },
    {
      text: '应用 🎈',
      items: [
        {
          text: 'Elasticsearch',
          link: '/app/elastic/index.md'
        },
        {
          text: 'Pulsar',
          link: '/app/pulsar/index.md'
        },
        {
          text: 'Git',
          link: '/app/git/index.md'
        },
        {
          text: '更多应用',
          link: '/app/more/index.md'
        }
      ]
    },
    {
      text: '编程 💯',
      items: [
        {
          text: 'Golang',
          link: '/coding/golang/index.md'
        },
        {
          text: 'Python',
          link: '/coding/python/index.md'
        },
        {
          text: 'Web',
          link: '/coding/web/index.md'
        },
        {
          text: 'Rust',
          link: '/coding/rust/index.md'
        }
      ]
    },
    {
      text: 'OS 🧲',
      items: [
        {
          text: 'CentOS',
          link: '/os/centos/index.md'
        },
        {
          text: 'Ubuntu',
          link: '/os/ubuntu/index.md'
        },
        {
          text: 'Windows',
          link: '/os/windows/index.md'
        }
      ]
    }
  ]
}

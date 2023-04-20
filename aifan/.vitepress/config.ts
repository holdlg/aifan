import { defineConfig } from 'vitepress'

import { appDocker, appElasticsearch, appKubernets, appPulsar, appMore, appGit } from './sidebar/app'
import { osCentOS, osUbuntu, osWindows } from './sidebar/os'
import { programPython, programRust, programGolang, programWeb } from './sidebar/program'
import { orange } from './sidebar/orange'

export default defineConfig({
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
      '/app/docker/': appDocker(),
      '/app/elastic/': appElasticsearch(),
      '/app/kubernetes/': appKubernets(),
      '/app/pulsar/': appPulsar(),
      '/app/git/': appGit(),
      '/app/more/': appMore(),
      '/program/golang/': programGolang(),
      '/program/python/': programPython(),
      '/program/rust/': programRust(),
      '/program/web/': programWeb(),
      '/os/centos/': osCentOS(),
      '/os/ubuntu/': osUbuntu(),
      '/os/windows/': osWindows(),
      '/orange/': orange()
    },

    footer: {
      message: 'ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备19045526号-1</a>',
      copyright: '版权 © 2023 <a href="https://fir8.com/" target="_blank">菲艾若芭</a>'
    }
  }
})

function nav() {
  return [
    { text: '首页 🎀', link: '/index.md', activeMatch: '/home/' },
    {
      text: '应用 🎈',
      items: [
        {
          text: 'Kubernetes',
          link: '/app/kubernetes/index.md'
        },
        {
          text: 'Elasticsearch',
          link: '/app/elastic/index.md'
        },
        {
          text: 'Docker',
          link: '/app/docker/index.md'
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
          link: '/program/golang/index.md'
        },
        {
          text: 'Python',
          link: '/program/python/index.md'
        },
        {
          text: 'Web',
          link: '/program/web/index.md'
        },
        {
          text: 'Rust',
          link: '/program/rust/index.md'
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

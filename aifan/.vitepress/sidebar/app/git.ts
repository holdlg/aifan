export default function appGit() {
  return [
    {
      text: 'Git',
      collapsible: true,
      collapsed: false,
      items: [{ text: 'git', link: '/app/git/git.md' }]
    },
    {
      text: 'Gitea',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'gitea端口映射', link: '/app/git/gitea端口映射.md' },
        { text: 'gitea安装', link: '/app/git/gitea安装.md' }
      ]
    }
  ]
}

export default function osWindows() {
  return [
    {
      text: 'Windows11',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'Maven源', link: '/os/windows/Win11_maven源' },
        { text: '激活', link: '/os/windows/Win11_激活' },
        { text: '重置Navicat', link: '/os/windows/Win11_重置navicat' },
        { text: '安装WSL2', link: '/os/windows/Win11_安装WSL2' }
      ]
    },
    {
      text: 'Windows10',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Ping IP段', link: '/os/windows/Windows10_Ping IP段' },
        { text: '禁用powershell安全验证', link: '/os/windows/Windows10_禁用powershell安全验证' },
        { text: 'Windows Terminal Here', link: '/os/windows/Windows10_Windows Terminal Here' },
        { text: '删除右键列表的共享', link: '/os/windows/Windows10_删除右键列表的共享' },
        { text: 'OpenJDK14环境变量', link: '/os/windows/Windows10_OpenJDK14 Windows10环境变量' },
        { text: '对调crtl 与 alt', link: '/os/windows/Windows10_对调crtl 与 alt' }
      ]
    },
    {
      text: 'Windows7',
      collapsible: true,
      collapsed: true,
      items: [{ text: 'MySQL服务', link: '/os/windows/Windows7_MySQL服务' }]
    }
  ]
}

export default function osCentOS() {
  return [
    {
      text: 'AlmaLinux9',
      collapsible: true,
      collapsed: false,
      items: [
        { text: '安装PostgreSQL', link: '/os/centos/9/AlmaLinux_安装PostgreSQL' },
        { text: '安装MySQL', link: '/os/centos/9/AlmaLinux_安装MySQL' },
        { text: '设置静态IP', link: '/os/centos/9/AlmaLinux_设置静态IP' },
        { text: '安装Docker', link: '/os/centos/9/AlmaLinux_安装Docker' },
        { text: '开启ssh', link: '/os/centos/9/AlmaLinux_开启ssh' },
        { text: 'Selinux', link: '/os/centos/9/AlmaLinux_Selinux' },
        { text: '查看端口占用', link: '/os/centos/9/AlmaLinux_查看端口占用' }
      ]
    },
    {
      text: 'CentOS8',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '安装nginx', link: '/os/centos/8/RockyLinux8_安装nginx' },
        { text: '静态IP设置', link: '/os/centos/8/CentOS8_静态IP设置' },
        { text: '设置基础软件仓库时出错', link: '/os/centos/8/CentOS8_设置基础软件仓库时出错' },
        { text: '编译Python', link: '/os/centos/8/CentOS8_编译Python' },
        { text: '时间设置', link: '/os/centos/8/CentOS8_时间设置' },
        { text: '安装NodeJS', link: '/os/centos/8/CentOS8_安装NodeJS' },
        { text: '安装Docker', link: '/os/centos/8/CentOS8_安装Docker' },
        { text: 'nmcli常用命令', link: '/os/centos/8/CentOS8_nmcli常用命令' },
        { text: 'maven 找不到环境变量或jre', link: '/os/centos/8/CentOS8_maven 找不到环境变量或jre' },
        { text: 'maven 安装', link: '/os/centos/8/CentOS8_maven 安装' }
      ]
    },
    {
      text: 'CentOS7',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '配置多IP', link: '/os/centos/7/CentOS7_配置多IP' },
        { text: '切换阿里云源', link: '/os/centos/7/CentOS7_切换阿里云源' },
        { text: '编译Python', link: '/os/centos/7/CentOS7_编译Python' },
        { text: 'firewall操作', link: '/os/centos/7/CentOS7_firewall操作' },
        { text: '用户操作', link: '/os/centos/7/CentOS7_用户操作' },
        { text: '查看系统信息', link: '/os/centos/7/CentOS7_查看系统信息' },
        { text: '升级内核', link: '/os/centos/7/CentOS7_升级内核' },
        { text: '在线安装Docker-ce', link: '/os/centos/7/CentOS7_在线安装Docker-ce' },
        { text: '安装Docker用aliyun源', link: '/os/centos/7/CentOS7_安装Docker用aliyun源' },
        { text: '安装Nginx', link: '/os/centos/7/CentOS7_安装Nginx' },
        { text: '开机启动', link: '/os/centos/7/CentOS7_开机启动' }
      ]
    }
  ]
}

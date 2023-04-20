# win11 安装 wsl2

先在开始菜单搜索`启用或关闭 Windows 功能`, 

勾选（以下2项）

适用于Linux的Windows子系统
虚拟机平台

确定后，重启电脑


管理员模式打开命令行工具，执行内容如下：
```bash

# 设置默认版本2
wsl --set-default-version 2

# 更新wsl
wsl --update


```

## 安装docker
访问 https://docs.docker.com/desktop/install/windows-install/ 下载安装包

## 安装linux子系统
```bash

# 查看可用linux版本
wsl --list --online

# 安装 Ubuntu-22.04
wsl --install -d Ubuntu-22.04
```
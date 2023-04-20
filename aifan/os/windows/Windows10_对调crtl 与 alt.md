# [Windows10] 对调crtl 与 alt

保存以下文本为 aaa.reg 文件

```shell
Windows Registry Editor Version 5.00
 
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
"Scancode Map"=hex:00,00,00,00,00,00,00,00,03,00,00,00,38,00,1D,00,1D,00,38,00,00,00,00,00

```

双击 aaa.reg 文件，确定，重启电脑即可。
​

​

还原案件，打开注册表 cmd->regedit  然后找到
​

> HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout

删除 Scancode Map 选项，重启即可。

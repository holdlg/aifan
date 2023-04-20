# [Ubuntu16] 启用root登录

1.设置密码

`sudo passwd root`

2.配置root登录
创建并编辑

`vim /etc/lightdm/lightdm.conf`

文件。
写入以下内容:

```
    [SeatDefaults]
    # 启动后以root身份自动登录
    autologin-user=root
    greeter-session=unity-greeter
    user-session=ubuntu

    # 手工输入登陆系统的用户名和密码
    greeter-show-manual-login=true

    # 禁用guest用户
    allow-guest=false
```

3.保存退出，注销,以root用户登录。

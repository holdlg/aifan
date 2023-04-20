# [Ubunt20] VSCode远程开发

修改文件监控数量
​

vi /etc/sysctl.conf 添加

```shell
fs.inotify.max_user_watches=524288
```

sudo sysctl -p

参考链接：

[https://code.visualstudio.com/docs/setup/linux#\_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc "https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc")

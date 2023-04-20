# [Windows10] Windows Terminal Here

Windows Terminal 右键当前目录打开

# 写入注册表

```bash
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Windows Terminal Here"
"Icon"="C:\\Users\\holdlg\\AppData\\Local\\Microsoft\\WindowsApps\\terminal.icon"

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\holdlg\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"
```

# 修改配置

profiles.json 中添加&#x20;

`startingDirectory`

```json
"profiles":
{
  "defaults":
  {
    // Put settings here that you want to apply to all profiles.
    "startingDirectory": null
  }
}
```

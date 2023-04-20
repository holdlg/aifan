# [Windows10] 删除右键列表的共享

```
Windows Registry Editor Version 5.00

;删除右键Modern共享
[-HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers\ModernSharing]

;删除文件夹\驱动器右键共享
[-HKEY_CLASSES_ROOT\Directory\shellex\ContextMenuHandlers\Sharing]

[-HKEY_CLASSES_ROOT\Directory\background\shellex\ContextMenuHandlers\Sharing]

[-HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\Sharing]

;删除右键包含到库
[-HKEY_CLASSES_ROOT\Folder\shellex\ContextMenuHandlers\Library Location]
```

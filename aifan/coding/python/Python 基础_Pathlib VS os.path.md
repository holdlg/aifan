# [Python 基础] Pathlib VS os.path

| 操作      | os and os.path           | pathlib                                 |
| ------- | ------------------------ | --------------------------------------- |
| 绝对路径    | `os.path.abspath`        | `Path.resolve`                          |
| 修改权限    | `os.chmod`               | `Path.chmod`                            |
| 创建目录    | `os.mkdir`               | `Path.mkdir`                            |
| 重命名     | `os.rename`              | `Path.rename`                           |
| 移动      | `os.replace`             | `Path.replace`                          |
| 删除目录    | `os.rmdir`               | `Path.rmdir`                            |
| 删除文件    | `os.remove`, `os.unlink` | `Path.unlink`                           |
| 工作目录    | `os.getcwd`              | `Path.cwd`                              |
| 是否存在    | `os.path.exists`         | `Path.exists`                           |
| 用户目录    | `os.path.expanduser`     | `Path.expanduser` and `Path.home`       |
| 是否为目录   | `os.path.isdir`          | `Path.is_dir`                           |
| 是否为文件   | `os.path.isfile`         | `Path.is_file`                          |
| 是否为连接   | `os.path.islink`         | `Path.is_symlink`                       |
| 文件属性    | `os.stat`                | `Path.stat`, `Path.owner`, `Path.group` |
| 是否为绝对路径 | `os.path.isabs`          | `PurePath.is_absolute`                  |
| 路径拼接    | `os.path.join`           | `PurePath.joinpath`                     |
| 文件名     | `os.path.basename`       | `PurePath.name`                         |
| 上级目录    | `os.path.dirname`        | `PurePath.parent`                       |
| 同名文件    | `os.path.samefile`       | `Path.samefile`                         |
| 后缀      | `os.path.splitext`       | `PurePath.suffix`                       |

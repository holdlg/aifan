# [Python 包] Pylint

## 据说pylint不检测第三方库，会有如下提示：

```
[pylint] Module 'lxml.etree' has no 'parse' member, but source is unavailable. Consider adding this module to extension-pkg-whitelist if you want to perform analysis based on run-time introspection of living objects. [I1101]
```

## vscode 禁用提示的方法

打开 vscode 的 首选项-设置 的&#x20;

`setting-user.json`

&#x20;文件，添加

```json
    "python.linting.pylintArgs": [
        "--disable=I1101"
    ],
```

## pylint 添加白名单的方法

```bash
pylint --generate-fcfile > .pylintrc
```

在.pylintrc檔案內加入lxml到whitelist內：

```
extension-pkg-whitelist=lxml
```

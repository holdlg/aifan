# win11 maven 源

找到 `c:\use\<你的用户名文件夹>\.m2\` 新建 settings.xml

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                          https://maven.apache.org/xsd/settings-1.0.0.xsd">
<mirrors>
    <mirror>
        <id>nexus-aliyun</id>
        <mirrorOf>*</mirrorOf>
        <name>Nexus aliyun</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
</mirrors>

</settings>
```

然后，打开 idea

File > settings > build,xxx > build tools > maven >

User settings file > 选择`c:\use\<你的用户名文件夹>\.m2\settings.xml`并勾选 override

最后 apply

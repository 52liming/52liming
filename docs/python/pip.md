---
sidebar_label: Pip
keywords: [pip upgrade, pip国内镜像]
---
# Pip 
## 升级
> WARNING: You are using pip version 19.2.3, however version 20.2.2 is available.
You should consider upgrading via the 'python -m pip install --upgrade pip' command.

```
python -m pip install --upgrade pip
```
## Pip国内源

新版ubuntu要求使用https源，要注意。

豆瓣：<http://pypi.douban.com/simple/>

清华：<https://pypi.tuna.tsinghua.edu.cn/simple>

阿里云：<http://mirrors.aliyun.com/pypi/simple/>

中国科技大学 <https://pypi.mirrors.ustc.edu.cn/simple/>

华中理工大学：<http://pypi.hustunique.com/>

山东理工大学：<http://pypi.sdutlinux.org/>

### 临时使用

使用参数 ```-i <https://pypi.tuna.tsinghua.edu.cn/simple>```

### 永久修改，一劳永逸

Linux下，修改 ```~/.pip/pip.conf```

内容如下：

```
[global]
index-url = <https://pypi.tuna.tsinghua.edu.cn/simple>
[install]
trusted-host=mirrors.aliyun.com
```

Windows下，直接在user目录中创建一个pip目录，如：```C:\Users\xx\pip```，新建文件```pip.ini```。内容同上。
---
title: typora+picgo-core+github配置图床实现自动上传图片
---

# typora+picgo-core+github配置图床实现自动上传图片

## 一、下载PicGo-Core

![004](https://raw.githubusercontent.com/Monster58/pictureBed/master/typora/004.png)

## 二、配置PicGo-Core的图床

> 配置文件参考官方文档：https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html

### 通过配置文件配置

```json
{
  "picBed": {
    "current": "github",
    "uploader": "github",
    "gitee": {
      "branch": "master",
      "customPath": "yearMonth",
      "customUrl": "",
      "path": "img/",
      "repo": "gitee用户名/gitee仓库名",
      "token": "自己的token"
    },
    "smms-user": {
      "Authorization": "替换成你自己的token"
    },
    "transformer": "path",
    "github": {
      "repo": "Monster58/pictureBed",
      "branch": "master",
      "token": "替换成你自己的token",
      "path": "typora/",
      "customUrl": ""
    }
  },
  "picgoPlugins": {
    "picgo-plugin-gitee-uploader": true,
    "picgo-plugin-smms-user": true,
    "picgo-plugin-github-plus": true
  },
  "picgo-plugin-gitee-uploader": {
    "lastSync": "2020-04-07 11:04:58"
  },
  "picgo-plugin-github-plus": {
    "lastSync": "2020-07-21 09:51:17"
  }
}
```

### 通过cli配置

```shell
cd C:\Users\用户名\AppData\Roaming\Typora\picgo\win64\
./picgo.exe set uploader
```



![image-20200721102511924](https://raw.githubusercontent.com/Monster58/pictureBed/master/typora/image-20200721102511924.png)

在`typora`中通过`验证图片上传选项`测试图片是否上传成功。

> 在配置文件`customUrl`通过`jsdelivr`加速图床的访问速度。

![image-20200721103758972](https://cdn.jsdelivr.net/gh/Monster58/pictureBed/typora/image-20200721103758972.png)

```json
"github": {
      "repo": "Monster58/pictureBed",
      "branch": "master",
      "token": "自己的token",
      "path": "typora/",
      "customUrl": "https://cdn.jsdelivr.net/gh/用户名/仓库名"
}
```


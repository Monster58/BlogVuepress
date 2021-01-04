---
title: npm发包教程
lang: zh-CN
---
>发布`npm`包需要切换为原始镜像
1. 进入要发布的项目根目录，初始化为npm包：
```shell
npm init
```
> 依次按提示填入包名、版本、描述、github地址、关键字、license等
2. 注册npm用户，有两种方法:
   1. npm官网注册：[npm](https://www.npmjs.com/)
   2. 使用npm 命令注册：`npm adduser`,根据提示填写用户名、密码、邮箱完成注册
3. 账号登录: `npm login`
4. 发布包，上传到npm包服务器：
 ```shell
 npm publish
 ```
5. 更新包：
   1. 更新包的版本`npm version patch`，版本号由`1.0.0`变为`1.0.1`
   2. 发布包：`npm publish`
6. 删除包
   1. 删除指定的版本：`npm unpublish 包名@版本号`
   2. 删除整个包：`npm unpublish 包名 --force`
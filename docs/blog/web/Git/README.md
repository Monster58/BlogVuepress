---
title: Git和GitHub的基本使用
date: 2018-03-17 14:16:49
categories: git和github
---


# GIT
## 什么是Git
- 是一个源代码管理工具
- 在一个项目中，凡是由开发人员编写的都算是源代码
- 让源代码可以被追溯，主要记录每次变更了什么。
- 人为维护比较麻烦
- Git是Linux之父为了维护管理Linux的源代码写的一个工具
- Git 之前很多实用SVN vss tfs hs 。。。

## 安装Git
- Git命令行工具
- 基于Git命令行的一个客户端软件（提供一个界面去管理源代码）

## Git命令操作

### 初始化一个本地Git仓储
```shell
cd 当前项目目录
git init // 初始化一个本地仓库
```
 就是在本地文件夹中添加了一个.git的文件夹用于记录项目的变更信息
 
### 查看本地仓储的变更状态
  git status
  第一次查看，显示的是一坨没有被跟踪的变化 
  git status -s
  列出更详细的信息
### 添加本地暂存（托管）文件
```shell
 git add
```
 可以将一个没有被跟踪的文件添加到跟踪列表
 类似于node_modules这种性质的文件是不应该被跟踪的

### 添加本地忽略清单
- 在代码库文件夹的根目录添加一个.gitignore文件
- 此文件用于说明忽略的文件有哪些
- 由于Windows下不知直接建以" . "开头的文件，必须键入文件名才可以，所以应该使用命令行创建上面这个文件夹
```shell
echo '' > .gitignore
//下面这种是文件夹格式的
mkdir .gitignore
```
- 里面写上文件名即可（支持通配符）
	/dist: 表示根目录下dist被禁止。

### 提交被托管的文件变化到本地仓储
```shell
 git commit -m '第一次提交'
 //将本地的变化提交到本地的仓库文件夹归档
```
 后面需要加上 -m '信息（如第一次提交或者修改了什么文件，第二次提交）'
 一般在有了一个小单元的整体变化后再提交

### 对比差异
```shell
 git diff   //difference差异
```
### 查看提交日志
```shell
 git log
```
###　回归到指定版本
```shell
　git reset --hard  //后面跟上对应版本的哈希值前六位
```
### 查看所有命令
```shell
git help
```

# GitHub基本使用
- https://github.com/
- GitHub是一个git服务的提供商
- 提出了社交化编程

## 添加一个远端的地址
```shell
git remote add origin 远端地址
git remote -v //查看地址
```

## 推送到远端
```shell
git push -u origin master
//-u是以流的方式上传，速度比较快，可以不加。
//master是主分支
```

## 从远端拉回
```shell
git pull origin master
```

## 分支

- 查看当前分支
```shell
git branch
```
- 创建一个分支
```shell
git branch v2(分支名)
```
- 切换分支
```shell
git checkout v2	 
```
- 创建分支之后需要继续推到远端仓库git push -u origin v2 

## 特殊的分支（网页预览）
```shell
git branch gh-pages
//名字必须为gh-pages才可变成网页 
```
- 如果需要绑定域名需要在对应仓库下建立CNAME文件，里面写上域名。前提是需要做dns解析!
## 克隆仓库
```shell
git clone 远端地址
```

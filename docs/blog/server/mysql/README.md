---
title: MySql
lang: zh-CN
---

> 阿里云服务器centos7安装mysql

## 1.安装MySQL官方的yum repository

```shell
wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
```

## 2.下载rpm包

```shell
yum -y install mysql57-community-release-el7-10.noarch.rpm
```

## 3.安装MySQL服务

```shell
yum -y install mysql-community-server
```

> 安装成功后会出现个complete！

## MySQL常用的命令：

```shell
重启：
systemctl restart mysqld.service

停止：
systemctl stop mysqld.service

查看状态：
systemctl status mysqld.service
```

## 配置MySQL的开机启动:

```shell
systemctl enable mysqld
systemctl daemon-reload   刚刚配置的服务需要让systemctl能识别，就必须刷新配置
```

## 4.启动MySql

```shell
systemctl start  mysqld.service
```

## 5.通过如下命令找到初始密码

```shell
grep "password" /var/log/mysqld.log
```

## 6.如下命令登录数据库：

```shell
mysql -uroot -p
```

### 6.1通过`quit`退出MySQL

> 此时不能做任何事情，因为MySQL默认必须修改密码之后才能操作数据库，如下命令修改密码。注意:密码设置必须要大小写字母数字和特殊符号（,/';:等）

```shell
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new password';
```



>  如下命令查看mysql默认密码复杂度：

```shell
SHOW VARIABLES LIKE 'validate_password%';
```

> 修改密码复杂度

```shell
set global validate_password_policy=LOW;  修改为LOW之后只验证密码长度
set global validate_password_length=6; 修改验证密码长度
```

## 7.开启mysql的远程访问

> 执行以下命令开启远程访问限制（注意：下面命令开启的IP是 192.168.19.128，如要开启所有的，用%代替IP）：
>
> **注：password--是你设置你的mysql远程登录密码。**

```shell
grant all privileges on *.* to 'root'@'192.168.0.1' identified by 'password' with grant option;
```

### 7.1然后再输入下面两行命令

```shell
flush privileges;
```

![](https://cdn.jsdelivr.net/gh/Monster58/pictureBed/typora/1780831-20200223141433774-1613386939.png)

## 8.开启防火墙端口，CentOS为firewalld添加开放端口3306

![image-20200901132937731](https://cdn.jsdelivr.net/gh/Monster58/pictureBed/typora/image-20200901132937731.png)

## 操作数据库命令

### 创建一个数据库

```shell
create database dbname;
```

### 显示所有数据库

```shell
show databases;
```

### 删除数据库

```shell
drop database dbname;
```

### 连接数据库

```shell
use dbname;
```



### 当前选择的数据库

```shell
select database();
```

### 导入sql文件

```shell
source /usr/db.sql;
```






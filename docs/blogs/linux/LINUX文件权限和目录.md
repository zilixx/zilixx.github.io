---
title: Linux文件权限和常用命令
---
[[toc]]
# Linux权限概念
## 权限角色
Linux中文件的权限分为用户，用户组和其他人
## 用户身份与用户组记录的文件
用户密码位于/etc/passwd \
个人密码在/etc/shadow \
所有组名记录在/etc/group 
## 查看文件属性
`ls -al`列出当前文件夹下所有文件，并将文件属性列出 \
文件属性包括：\
1. 权限
2. 连接数
3. 所有者
4. 用户组
5. 文件容量
6. 修改日期
7. 文件名 \

文件权限由十个字符表示，如`-rwxrwxrwx`，其中`r`代表读，`w`代表写，`x`代表可执行。除去第一位，后面九位字符分成三组，分别对应文件所有者权限，文件所属用户组权限以及其他人权限。 \
第一个字符意义
- `d`: 目录directory
- `-`: 文件file
- `l`: 链接文件linkfile，比如windows下面的快捷方式
- `b`: 可供存储的接口设备block
- `c`: 字符设备文件，如键盘、鼠标character
- `s`: 套接字文件socket
## 改变文件属性和权限
- chgrp: change group改组
- chown: change owner改所有者
- chmod: 改文件权限 \

格式
```shell
chgrp [-R]  dirname/filename
# -R 代表是否递归操作

chmod [-R] xyz filename/dirname
# xyz 代表属性数值
# r: 4  w: 2  x: 1
# 三位一组
chmod 770 .bashrc # 将.bashrc的权限更改为-rwxrwx---
# 或者使用u，g，o代表三个类型user，group和others。如果是全部人则是用a表示
chmod u=rwx go=rx .bashrc
# 使用+，-，=可以增加，除去以及设置权限
```
## 权限的意义
- r：读取内容
- w：可编辑，可以新增或可修改。不包括删除
- x：可被系统执行 \

对于目录而言，`x`代表是否可以使用`cd`切换进目录里；`w`代表是否可以对文件夹内的文件进行修改，删除和新建操作，这些操作可以无视文件本身定义的权限；`r`代表是否可以用`ls`查看文件夹。因此当某个权限表示为`r--`时，该用户/用户组并不能切换至该目录。

# Linux目录配置
## FHS，Filesystem Hierarchy Standard
> FHS代表文件层级标准，这个标准规定了一些文件夹的意义，目的是为了让用户可以了解安装软件通常放置于哪个目录下。

常用的文件夹意义：
|目录|应放置文件内容|
|---|---|
|/bin|系统放置可执行文件的目录，可以被root和一般账号使用。如mv，cat，chmod等|
|/dev|存储接口与接口设备文件的位置，如/dev/sd*|
|/etc|环境配置文件，如/etc/init.dev|
|/home|用户主文件夹，下面存放以用户名为名称的文件夹|
|/lib|系统函数库|
|/media|存放可删除设备，包括软盘，光盘|
|/sbin|重要的系统可执行文件|
|/usr|unix software resource，用来存储软件|

# Linux常用文件命令
## 路径名和目录名称
```shell
basename /etc/sysconfig/network # output: network
dirname /etc/sysconfig/network # output: /etc/sysconfig
```
## 文件内容查阅
1. cat: 从第一行开始显示文件内容
2. tac: 从最后一行开始显示
3. nl: 显示的时候，输出行号
4. more: 一页一页显示文件内容
5. less: 与more相似，但可向前翻页
6. head: 只看头几行，-n参数后跟行数
7. tail: 只看尾几行，-n使用同上
8. od: 以二进制读取文件内容
## 文件查询
### 查询脚本文件名
```shell
which [-a] # -a将所有由PATH目录中可以找到的命令均列出
which ifconfig # output: /sbin/ifconfig 

type [-tpa] name # 查询命令是否为外部命令
# -t: 显示内置命令 file/alias/builtin
# -p: 如果name为外部命令，才会显示完整文件名
# -a: 会有PATH定义的路径中，将所有寒name的命令都列出来
# 无参数显示外部命令或者bash内置命令
```
### 按文件名查找
```
whereis [-bmsu]
# -b: binary file
# -m: manual file
# -s: source file+
# -u: others

locate [-ir] # 根据文件名定位一系列文件
# -i: ignore upper class and lower class
# -r: regex
```
由于是从数据库中查询文件，对于新创建的文件可能会出现查询不到的问题，此时需要手动更新数据库。
```
updatedb # 在硬盘中查找文件名，并更新数据库
```
使用find查询
```
find [path] [option] [option] # 在某一路径下查询
# options
# -mtime: 修改时间
# -mtime +n: n天以前修改过的文件
# -mtime -n: n天内修改过的文件
# -mtime n: 第n天前修改过的文件
# -user [user]: 查询user的文件
# -group [group]: 查询group的文件
# -name [filename]: 按照文件名查找文件
# -type [type]: 按照文件类型查找文件
# -size +[size] -[size]: 按文件大小查询，+代表大于，-代表小于
# -a -o: 条件查询中的and和or
```
whereis和locate查询根据linux数据库文件查询，与find相比速度更快，因为find是查询硬盘。而这取决于硬盘读写快慢。

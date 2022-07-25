---
title: bash常用命令
---
[[toc]]
## shell介绍
shell的功能是为用户提供操作系统的接口，用户可以通过shell操作调用系统中的应用程序。每个Linux发布版本中支持很多shell。可以在命令行中输入`sudo vim /etc/shells`
```shell
sudo vim /etc/shells

# output:
# /etc/shells: valid login shells
# /bin/sh
# /bin/bash
# /usr/bin/bash
# /bin/rbash
# /usr/bin/rbash
# /bin/dash
# /usr/bin/dash
# /usr/bin/tmux
# /usr/bin/screen
```
可以看到该linux发布版本中支持的shell。其中bash是linux默认的shell。
## bash shell功能
- 命令记忆 \
曾经执行过的命令会在`~/.bash_history`中被记录。
- 文件补全 \
使用`Tab`可以进行命令的补全或者文件名的补齐。
- 命令别名 \
使用`alias command='[command]'`可以为某个长命令设置别名。
- 程序脚本 \
使用shell执行批处理命令  
## 变量基本使用
```shell
name=lzd # 定义变量
echo $name # 终端显示lzd

introduction=my\ name\ is\ ${name} # 使用反斜杠转义空格，与其他变量进行拼接
introduction="my name is ${name}" # 使用双引号包裹变量，效果同上

ls -l `locate passwd` # 反引号代表先执行的内容，也可以用$()代替
```
## 变量声明，读取
```shell
#变量读取
read [-pt] [variable] #让用户从键盘输入变量
# -p 后接提示
# -t 后面等待的时间

#变量声明
declare [-aixr] [variable]
# -a: array类型
# -i: integer类型
# -x: 是否export到环境变量
# -r: 是否readonly
```
## 数据流的重定向
一般情况下，终端执行命令后会将执行后的结果输出到屏幕上，而结果分为标准输出结果stdout和标准输出错误stderr。而数据流的重定向则是使用`>`,`>>`,`<<`,`<`来控制数据流的去向。
```shell
# 标准输出 >, >> 
# 示例
ll / > ~/file # 将ll命令执行的结果重定向输出到file中，如果文件有内容则覆盖
ll / >> ~/file # 将ll命令执行结果累加到file中，即在原来的内容上新增

# 标准输入 <, <<
cat > file # 使用cat让用户在控制台输入内容然后写入file中，使用ctrl+d结束输入
cat > file < ~/.bashrc # 将已存在的某个文件内容写入file中，cat代表连接
cat > file << "end"  # <<会让用户在控制台进行输入，后跟的end代替ctrl+d
```
## 双向重定向tee
```shell
tee [-a] file # 同时将输出写入文件以及输出到屏幕，-a参数为是否为追加内容
```
## 管道命令
管道命令`|`可以让若干个命令进行连接，让前一个命令的标准输出作为后一个命令的标准输入。
```shell
ll /etc | more # ll输出的内容让more进行读取
```
## 使用cut和grep截取
### cut 
cut命令是在一行中为用户截取一行中的某一段或若干段而存在的命令。
```shell
cut -d ':' -f n
# -d: 后面跟分隔字符
# -f: 后面跟选取的第n段
# -c: 按字符的单位

echo $PATH | cut -d ':' -f 3,5 # 输出PATH内容，并且按:分割，取第三和第五段

export |cut -c -12 # 按字符作为分割，取前12个字符
export | cut -c 12- # 按字符进行分割，取第12个字符以后的内容 
```
### grep 
grep命令允许用户在一段文本中通过查找字符串提取出字符串所在的那行信息。
```shell
grep [-acniv] 'querystring' filename --color=auto
# -a: 将二进制文件以文本文件形式查找
# -c: count，即查找到字符串的次数
# -n: 标出行号
# -i: 忽略大小写
# -v: 反向查找，找出不存在字符串query的行
# --color: 关键字用什么颜色进行高亮
# 'querystring'既可以是字符串也可以是正则表达式内容
```



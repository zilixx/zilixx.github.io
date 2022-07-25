---
title: Linux可执行文件以及gcc编译
---

[[toc]]

# Linux与可执行文件
Linux系统上面，一个文件能否执行需要看有没有可执行的权限。实际上linux能真正识别的可执行文件是二进制文件，如`passwd`，`bash`等，这些其实都是二进制文件。
Linux中使用`file`命令可以查看一个文件是否为二进制文件。
```shell
file /usr/bin/bash

/bin/bash: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=2a9f157890930ced4c3ad0e74fc1b1b84aad71e6, for GNU/Linux 3.2.0, stripped 
```
返回信息的意思是`ELF 64-bit LSB`，其中`LSB`代表`linux standard base`，翻译为linux标准，该标准的目的是为了让软件在支持LSB标准的系统上运行。`LSB`也帮助软件产品可以一直到Linux系统上。 \
与windows的PE可执行文件不同，linux的可执行文件格式是`ELF(Executable and Linkable Format)`，`ELF`格式文件包括二进制文件、可执行文件、目标代码、共享库和核心转储格式文件。`ELF`格式的文件结构如下:
|ELF header|
|---|
|program header table|
|.text|
|.rodata|
|...|
|.data|
|section header table|
其中`program header table`作用是告诉系统如何构建进程的镜像，中间的隐藏文件(称为section)存储的是各种指令数据、符号数据重定位数据等。`section header table`相当于每个`section`的注册表，包含了`section`的大小以及名字。
# 如何构建二进制可执行文件
## 三个角色
使用高级程序语言的源码->编译程序->可执行文件(二进制文件)
## 如何编译？
Linux最标准的语言c语言，在linux上使用高级语言编译程序gcc(GNU Compiler Collection) 其中包括`c，c++，java，objective-c`编译器，即可制作一个可执行的二进制程序。
编译过程中，会生成以`*.o`为后缀的目标文件。另外在程序中也会调用一些其他软件的函数功能。因此在编译的过程中会将该函数库加进去，也就是将程序代码和函数库做链接，最终生成可执行文件。
## make和configure
一般来说，一套软件的程序代码，含有主程序和子程序。而在代码编译的过程中不仅需要对每个主程序及子程序写编译过程的命令，而且需要写链接程序编译命令。此时可以用make来对编译过程进行简化操作。
`make`命令会在当前目录下搜索`makefile`，其中记录了源码编译的信息。然后更新可执行文件。
通常情况下，由于不同用户的操作环境不同，软件开发者会在程序中加入检测程序，这个程序文件一般为`configure`。如果用户的操作环境具备软件开发所需要的功能，检测程序就会新建`makefile`文件。 \
流程如下： \
源代码->`configure`找到需要的函数库、编译器及其他资料->`makefile`->使用`make` \
不同的linux发布版本不同，其函数库文件防止路径或者函数库文件名定义皆不同。因此在一个linux发布版本上的二进制文件，在其他版本上是不会执行成功的。
# 编译实操
linux两大发行版主流，Red Hat和Debian，分别使用RPM和DPKG来进行软件管理。一般用户常用的Centos是使用RPM作为包管理，而Ubuntu是使用DPKG。下面演示以ubuntu为例。
## 下载gcc
```shell
sudo apt update # 更新
sudo apt-get install build-essential # 安装编译依赖
```
## 查看build-essential依赖
```shell
sudo apt-cache depends

build-essential
 |Depends: libc6-dev
  Depends: <libc-dev>
    libc6-dev
  Depends: gcc
  Depends: g++
  Depends: make
    make-guile
  Depends: dpkg-dev
```
可以看到build-essential内置了编译c/c++所需要的软件包
## 查看gcc版本
```shell
gcc --version
```
## 使用gcc编译和测试执行
```shell
gcc [file]
# 不带参数的情况下，默认产生a.out，该文件是在linux系统下的可执行文件。可选参数-O。该参数可以依据操作环境给予优化执行速度。
gcc -c [file]
# 生成*.o目标文件，-c参数代表编译但不链接其他函数库。
gcc -o [output] [*.o]...
# 生成可执行文件，-o参数后面跟输出的可执行文件名，以及目标文件。可选参数-Wall，表示严格编译，此时可能会有警告信息。
gcc [file] -l[lib] -L[path1] -L[path2]
# 当程序使用外部库时，需要在编译时声明使用的函数库，-l参数后接的是对应的函数库名称；-L后面跟的是库存储的地址信息。
```
## 生成目标文件目的
由于源码文件通常包含多个文件，因此无法直接进行编译，这时需要先生成目标文件，然后再用链接生成二进制可执行文件。如果对其中的某一个文件进行了修改，则需要重新编译改文件来产生新的目标文件，之后再链接制作出可执行的二进制文件。这样做的好处是不需要动其他未进行改动的代码文件。
最终的可执行文件包括所有链接的目标文件和使用库以及启动代码。
## 使用make进行宏编译
`make`的功能是简化编译过程中的执行命令。在源码文件特别多的情况下，`make`可以简化编译流程。
首先需要构建`makefile`文件，在文件中加入之前的编译命令。在终端使用`make`命令会自动搜索`makefile`文件内容。
```shell
[output]: [object file1] [object file2] ...  #自定义依赖关系
   gcc -o [output] [object file1] [object file2] ... -lm  #生成目标文件/可执行文件

make #进行编译
```
make后可跟目标名，如二进制文件，目标文件，或者`clean`操作。`clean`操作代表清除，`clean`信息可以加入删除目标文件或者可执行文件操作。这样使用`make clean`会删除目标文件。
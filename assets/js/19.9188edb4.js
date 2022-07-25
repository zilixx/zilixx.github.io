(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{420:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#shell介绍"}},[s._v("shell介绍")])]),t("li",[t("a",{attrs:{href:"#bash-shell功能"}},[s._v("bash shell功能")])]),t("li",[t("a",{attrs:{href:"#变量基本使用"}},[s._v("变量基本使用")])]),t("li",[t("a",{attrs:{href:"#变量声明-读取"}},[s._v("变量声明，读取")])]),t("li",[t("a",{attrs:{href:"#数据流的重定向"}},[s._v("数据流的重定向")])]),t("li",[t("a",{attrs:{href:"#双向重定向tee"}},[s._v("双向重定向tee")])]),t("li",[t("a",{attrs:{href:"#管道命令"}},[s._v("管道命令")])]),t("li",[t("a",{attrs:{href:"#使用cut和grep截取"}},[s._v("使用cut和grep截取")]),t("ul",[t("li",[t("a",{attrs:{href:"#cut"}},[s._v("cut")])]),t("li",[t("a",{attrs:{href:"#grep"}},[s._v("grep")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"shell介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell介绍"}},[s._v("#")]),s._v(" shell介绍")]),s._v(" "),t("p",[s._v("shell的功能是为用户提供操作系统的接口，用户可以通过shell操作调用系统中的应用程序。每个Linux发布版本中支持很多shell。可以在命令行中输入"),t("code",[s._v("sudo vim /etc/shells")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/shells\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/shells: valid login shells")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /bin/rbash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/rbash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /bin/dash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/dash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/tmux")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/screen")]),s._v("\n")])])]),t("p",[s._v("可以看到该linux发布版本中支持的shell。其中bash是linux默认的shell。")]),s._v(" "),t("h2",{attrs:{id:"bash-shell功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash-shell功能"}},[s._v("#")]),s._v(" bash shell功能")]),s._v(" "),t("ul",[t("li",[s._v("命令记忆 "),t("br"),s._v("\n曾经执行过的命令会在"),t("code",[s._v("~/.bash_history")]),s._v("中被记录。")]),s._v(" "),t("li",[s._v("文件补全 "),t("br"),s._v("\n使用"),t("code",[s._v("Tab")]),s._v("可以进行命令的补全或者文件名的补齐。")]),s._v(" "),t("li",[s._v("命令别名 "),t("br"),s._v("\n使用"),t("code",[s._v("alias command='[command]'")]),s._v("可以为某个长命令设置别名。")]),s._v(" "),t("li",[s._v("程序脚本 "),t("br"),s._v("\n使用shell执行批处理命令")])]),s._v(" "),t("h2",{attrs:{id:"变量基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量基本使用"}},[s._v("#")]),s._v(" 变量基本使用")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("lzd "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 终端显示lzd")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("introduction")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" is"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用反斜杠转义空格，与其他变量进行拼接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("introduction")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my name is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用双引号包裹变量，效果同上")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 反引号代表先执行的内容，也可以用$()代替")]),s._v("\n")])])]),t("h2",{attrs:{id:"变量声明-读取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量声明-读取"}},[s._v("#")]),s._v(" 变量声明，读取")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#变量读取")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-pt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("variable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#让用户从键盘输入变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 后接提示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -t 后面等待的时间")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#变量声明")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-aixr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("variable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a: array类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i: integer类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -x: 是否export到环境变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r: 是否readonly")]),s._v("\n")])])]),t("h2",{attrs:{id:"数据流的重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据流的重定向"}},[s._v("#")]),s._v(" 数据流的重定向")]),s._v(" "),t("p",[s._v("一般情况下，终端执行命令后会将执行后的结果输出到屏幕上，而结果分为标准输出结果stdout和标准输出错误stderr。而数据流的重定向则是使用"),t("code",[s._v(">")]),s._v(","),t("code",[s._v(">>")]),s._v(","),t("code",[s._v("<<")]),s._v(","),t("code",[s._v("<")]),s._v("来控制数据流的去向。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标准输出 >, >> ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\nll / "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/file "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将ll命令执行的结果重定向输出到file中，如果文件有内容则覆盖")]),s._v("\nll / "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/file "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将ll命令执行结果累加到file中，即在原来的内容上新增")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标准输入 <, <<")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("cat"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用cat让用户在控制台输入内容然后写入file中，使用ctrl+d结束输入")])]),s._v("\ncat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ~/.bashrc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将已存在的某个文件内容写入file中，cat代表连接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <<会让用户在控制台进行输入，后跟的end代替ctrl+d")]),s._v("\n")])])]),t("h2",{attrs:{id:"双向重定向tee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双向重定向tee"}},[s._v("#")]),s._v(" 双向重定向tee")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同时将输出写入文件以及输出到屏幕，-a参数为是否为追加内容")]),s._v("\n")])])]),t("h2",{attrs:{id:"管道命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管道命令"}},[s._v("#")]),s._v(" 管道命令")]),s._v(" "),t("p",[s._v("管道命令"),t("code",[s._v("|")]),s._v("可以让若干个命令进行连接，让前一个命令的标准输出作为后一个命令的标准输入。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ll /etc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll输出的内容让more进行读取")]),s._v("\n")])])]),t("h2",{attrs:{id:"使用cut和grep截取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用cut和grep截取"}},[s._v("#")]),s._v(" 使用cut和grep截取")]),s._v(" "),t("h3",{attrs:{id:"cut"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cut"}},[s._v("#")]),s._v(" cut")]),s._v(" "),t("p",[s._v("cut命令是在一行中为用户截取一行中的某一段或若干段而存在的命令。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" -f n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d: 后面跟分隔字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f: 后面跟选取的第n段")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -c: 按字符的单位")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3,5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出PATH内容，并且按:分割，取第三和第五段")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c -12 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按字符作为分割，取前12个字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("- "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按字符进行分割，取第12个字符以后的内容 ")]),s._v("\n")])])]),t("h3",{attrs:{id:"grep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[s._v("#")]),s._v(" grep")]),s._v(" "),t("p",[s._v("grep命令允许用户在一段文本中通过查找字符串提取出字符串所在的那行信息。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-acniv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'querystring'")]),s._v(" filename --color"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a: 将二进制文件以文本文件形式查找")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -c: count，即查找到字符串的次数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n: 标出行号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i: 忽略大小写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v: 反向查找，找出不存在字符串query的行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --color: 关键字用什么颜色进行高亮")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'querystring'既可以是字符串也可以是正则表达式内容")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
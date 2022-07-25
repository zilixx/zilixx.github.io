[[toc]]
# nginx安装
```shell
wget https://nginx.org/download/nginx-1.22.0.tar.gz

tar -zvxf nginx-1.22.0.tar.gz

# 进入nginx目录
cd nginx-1.22.0.tar.gz

# configure检测系统运行环境，生成makefile
./configure --prefix=/usr/local/nginx

# 安装nginx
make && make install

# 进入nginx sbin目录，启动nginx服务，默认端口号80
cd nginx/sbin && ./nginx
```
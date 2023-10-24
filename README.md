# Reactjs 前端网站开发

## 介绍
这是一个使用React v18和React Bootstrap开发的前端项目。

## 特性

- 利用最新的React v18特性
- 使用React Bootstrap为项目提供现代化和响应式的UI
- Vite构建工具，确保快速的开发和高效的打包

## 使用说明

1. 首先，确保你的系统已安装了`Node.js`和`npm`。
2. 克隆本项目到你的本地：
   ```bash
   git clone <项目的git仓库URL>
   cd 项目目录
   ```
3. 安装所有依赖
    ```bash
    npm install
    ```
4. 使用Vite运行项目：
    ```bash
    npm run dev
    ```
## Vite构建指南

在项目根目录下，运行以下命令来构建项目：
   ```bash
   npm run build
   ```
构建完成后，你会在dist目录下看到打包好的文件。你可以使用任何静态文件服务器来部署这些文件。

## 将静态文件部署到云服务器
### 上传文件到服务器
    ```bash
    scp -r ./build your_username@your_server_ip:/usr/share/nginx/html
    ```
### 使用nginx搭建静态服务器
使用yum安装nginx
1. 安装nginx
    ```bash
    sudo yum install nginx -y   
    ```
2. 运行nginx
    ```bash
    sudo systemctl start nginx
    sudo systemctl restart nginx #重新启动nginx
    sudo nginx           #使用此命令运行nginx
    nginx -s reload     #重启nginx
    sudo nginx -t    #检查nginx的配置
    sudo systemctl status nginx.service #查看Nginx的状态
    sudo tail -n 20 /var/log/nginx/error.log 
    sudo cat /var/log/nginx/error.log #查看Nginx的错误日志
    ```
3. nginx常用命令
    ```bash
    service nginx start/stop/restart                # 开启、关闭、重启命令
    nginx -V                #查看版本信息
    nginx -t                #测试配置文件是否正确
    nginx -h                #查看帮助文档
    ```
4. 如果发生进程冲突，你可以尝试
- 安装网络工具
    ```
    sudo yum install net-tools
    ```
- 查看端口使用
    ```bash
    sudo netstat -tulnp | grep :80
    ```

- 杀死nginx进程并重启nginx 
    ```bash 
    sudo pkill nginx
    ```
### 配置静态服务器的访问路径
nginx可以给用户提供访问Web服务的功能，但是需要先配置正确的静态资源路径才能通过url访问到我们需要展示的静态html资源文档
1. 查看并打开nginx的默认配置文件
```bash
    nginx -t            #测试配置文件是否正确
```
文件路径
```bash
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful
```

修改配置文件
```bash 
    cd /etc/nginx/      #转到相应的路径下 
    nano nginx.conf      #使用nano打开并进行修改，将路径修改为我们存放静态资源文件的路径，比如说改成/data/www 或者是别的相应的文件
```
```bash
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }
    }
    
```


## 结束
感谢您的关注和使用！如有任何问题或建议，请随时提Issue或Pull Request。

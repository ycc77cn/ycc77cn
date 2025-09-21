# 说明
# [杨CC资源站](ycc77.cn)_众多资源等你来拿!
<br>
# [杨CC 技术录](ycc77.com)_超多详细技术!








# 1.网站介绍

此网站,全部由静态编写,如果需要搭建与此网站完全一致的效果,请查看以下教程.



# 2. 本地部署

## 2.1 所需工具

​	1.git

​	2.vscode或者trea

​	3.nginx或者其他部署网站工具(小皮面板\宝塔面板等)



## 2.2 本地部署教程:

```
git clone https://github.com/Sgyling/Sgyling.github.io.git #拉取最新页面数据

# 使用vsc或者trea打开该目录,即可看到代码
# 可以使用修改自己想要的资源,也可以修改名字
```



# 3. 服务器部署



## 3.1 Linux部署教程

### 3.1.1 所需工具

1.宝塔

2.nginx

### 3.1.2 部署教程

```shell
if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec  #终端输入这条命令安装宝塔

#安装完成后,会提示账号密码
```

```shell
# 进入宝塔后:安装nginx即可
# 点击'网站'
# 创建 '静态网站'
# 输入自己的域名或者ip创建完成后.
# 点击'文件'
# 找到网站目录
访问 https://github.com/Sgyling/Sgyling.github.io/tree/main
# 找到Code-Clone-Download ZIP  进行下载源代码
# 下载完成后上传到网站目录,即可.
```

## 3.2 Windows部署教程

### 3.2.1 准备工具

1.小皮面板或者iis

2.git

### 3.2.2 部署教程

```
git clone https://github.com/Sgyling/Sgyling.github.io.git #拉取最新的网站信息


访问:xp.cn
# 找到phpStudy
# 点击旧版入口
# 点击下载Windows版本
# 设置网站目录
# 开启服务即可.
```


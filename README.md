# ife-mission-starter
为进行 IFE 任务搭建基本框架。具体的任务连接：

  - [第一阶段任务](http://ife.baidu.com/task/all)

由于第一阶段任务会从最基本的 HTML，CSS 开始，所以暂时基本框架中只会包含 lite-server 这一个工具，提供自动刷新浏览器的功能。

  - [lite-server](https://github.com/johnpapa/lite-server)

## 安装步骤
### Node.js 的安装
介于今后有可能会用到多个版本的 node.js，我推荐使用 nvm（Node Version Manager）来安装和管理 node：

  - [nvm](https://github.com/creationix/nvm)
  - [nvm-windows](https://github.com/coreybutler/nvm-windows)

nvm 安装好后，直接使用以下命令安装 node：

```
  nvm install latest
```

安装完成后，通过以下命令确认安装是否成功：

```
  node --version
```

### 项目依赖安装

```
  npm install
```
安装中可能会出现一些警告，忽略它们。

### 运行

```
  npm start
```
使用这个命令后，会在你的默认浏览器上自动开启一个 localhost:3000 窗口，显示的页面为项目目录中的 index.html。当你修改 index.html 并保存，浏览器会自动刷新，展现出最新的效果。
# ife-mission-starter
为进行 IFE 任务搭建基本框架。具体的任务连接：

  - [IFE 任务](http://ife.baidu.com/task/all)

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

### 运行项目

```
  gulp watch
```
使用这个命令后，会在你的默认浏览器上自动开启一个 localhost:3000 窗口，显示的页面为项目 src/ 目录中的 index.html。当你修改 index.html 并保存，浏览器会自动刷新，展现出最新的效果。

## 用到的工具
### 基本工具
- [browser-sync](https://github.com/BrowserSync/browser-sync)
- [gulp](https://github.com/gulpjs/gulp)

### gulp 插件
gulp 需要用到很多插件，并提供了[插件搜索页面](http://gulpjs.com/plugins/)方便获取插件。这里使用到的 gulp 插件及版本如下：

- [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)：`v1.3.0` 压缩 HTML 文件；
- [gulp-clean-css](https://github.com/scniro/gulp-clean-css)：`v2.0.3` 压缩 CSS 文件；
- [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)：`v2.4.0` 压缩图片；
- [gulp-watch](https://github.com/floatdrop/gulp-watch)：`v4.3.5` 监控文件变化；
- [gulp-cache](https://www.npmjs.com/package/gulp-cache/)：`v0.4.3` 在压缩图片处使用，当图片发生变化时才进行压缩；
- [del](https://github.com/sindresorhus/del)：`v2.2.0` 在开始任务前将已有的压缩文件删除掉。

JavaScript 处理相关插件：

- [gulp-jshint](https://github.com/spalger/gulp-jshint) `v2.0.0`
- [gulp-uglyfly](https://github.com/quaderi/gulp-uglyfly) `v1.4.2`
- [gulp-rename](https://github.com/hparra/gulp-rename) `v1.2.2`
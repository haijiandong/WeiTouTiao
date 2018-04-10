这是一个使用[Ionic](http://ionicframework.com/docs/) 框架+Angular4+TypeScript开发的简单App示例项目.

目前只有安卓版本，在此[下载试用](https://pan.baidu.com/s/1gfpEApd)

### 使用 Ionic CLI:

```bash
$ sudo npm install -g ionic cordova
$ ionic start
```
### 编译
```bash
$ ionic cordova platform add android
$ ionic cordova build android
```


后台Api项目使用ASP.NET Core Web Api编写的，从搜狗微信爬取的数据，经过xpath解析后持久化到数据库中，供app调用，api项目的地址[在此](https://github.com/haijiandong/WxSpider)
[一个很low的go版本api](https://github.com/haijiandong/go_wxspider)

相关的几篇笔记：
- [https://www.zybuluo.com/hais2/note/786455](https://www.zybuluo.com/hais2/note/786455)
- [https://www.zybuluo.com/hais2/note/787022](https://www.zybuluo.com/hais2/note/787022)
- [https://www.zybuluo.com/hais2/note/786838](https://www.zybuluo.com/hais2/note/786838)

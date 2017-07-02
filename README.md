这是一个使用[Ionic](http://ionicframework.com/docs/) 框架开发的简单App示例项目.

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

目前只有安卓版本，在此[下载试用](https://pan.baidu.com/s/1gfpEApd)

后台Api项目使用ASP.NET Core Web Api编写的，从搜狗微信爬取的数据，经过xpath解析后持久化到数据库中，供app调用，api项目的地址[在此](https://github.com/haijiandong/WxSpider)

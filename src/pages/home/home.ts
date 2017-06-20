import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//http://16683n203x.iask.in/api/News/GetAllList?type=0&index=0
export class HomePage {
  posts = [
    {
      "title": "用时三年，竟然用这种方法追到妹子!",
      "publishTime": "1497966331",
      "description": "转發+點瓒，大家好，东北搞笑原创账号大呲花，请微信搜索公众号【大呲花】大家好，东北搞笑原创账号大呲花，请微信搜索公众号【大呲花】大家好，东北搞笑原创账号大呲花，请微信搜索公众号【大呲花】大家好，东北搞笑原创账号大呲花，请微信搜索公众号【大呲",
      "coverUrl": "http://img04.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FFvEEIibibh2TCzWxHdRIRkiaVicaztKbcb2q9r6ZrqwIsOib1txp1SVlEHjrWgvGvlU7MLDSr9iajNZX1D6AnYg2nkvg%2F0%3Fwx_fmt%3Dpng",
      "author": "大呲花",
      "newsId": "2ec81301-948e-4e48-a532-89738bf992f7",
      "newsType": 0,
      "id": "0105f4d5-921e-4c0b-bad4-03a0ab2694b0",
      "createTime": "2017-06-20T23:00:41",
      "modifiedTime": "2017-06-20T23:00:41"
    },
    {
      "title": "广东要下一个月的雨?假的!未来的天气状况是……",
      "publishTime": "1497966311",
      "description": "小伙伴们有没有留意到，最近广东的天气总是不稳定，本来在路上走得好好的，时不时就下起雨来，这样的天气是不是让你有些小崩溃呢？昨晚，朋友圈又流传起这张图，显示广东还要再下一个月的雨，不过天气君已经辟谣：这是↓↓假！的！那么雨到底什么时候会停？来",
      "coverUrl": "http://img03.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F71vT6WeWUCWbicj2pJ6Q5iavbSjhyOjgAGiboUhvyPXhUteicBclhnVR4iay7BPSuJgwpbGic3uJXZhfIlzAwmV1d0pg%2F0%3Fwx_fmt%3Djpeg",
      "author": "广东发布",
      "newsId": "430c2e4d-f367-401c-9d96-7dfbf6ce22e8",
      "newsType": 0,
      "id": "432370f2-fbfd-4040-8a1c-8dad4b6470df",
      "createTime": "2017-06-20T23:00:45",
      "modifiedTime": "2017-06-20T23:00:45"
    },
    {
      "title": "碉堡!“加多宝+小龙虾”就能轻松赚好几亿，神级营销只靠一招!",
      "publishTime": "1497966076",
      "description": "文/金错刀频道 山岚最近加多宝有个数据让刀哥很震惊！“有超过95%的年轻消费者吃小龙虾时首选加多宝凉茶！”更恐怖的是，这个数据，是真的！据了解，小龙虾一年能给加多宝增加上亿罐销量，随着国内小龙虾销量的节节攀升，这个数据，每年还在以两位数的比",
      "coverUrl": "http://img03.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Ff8qQDVOfjhye8PwBT8qJ8d5JicNLjwFWCwsU7v9k2QFdf9zSmYuRUEibIydLfpiawbz7RyiadLWsXUdiaSoPBBokVNw%2F0%3Fwx_fmt%3Djpeg",
      "author": "金错刀",
      "newsId": "ac2fdb09-81e3-4282-81e7-fc7efc7cc090",
      "newsType": 0,
      "id": "cfe5f202-1fb5-4e1e-8689-6a35e5d60729",
      "createTime": "2017-06-20T23:00:54",
      "modifiedTime": "2017-06-20T23:00:54"
    },
    {
      "title": "怕宝宝被同龄人落下，这个问题你一定担心过",
      "publishTime": "1497964950",
      "description": "有位宝妈后台留言说，周围有朋友打算给上大班的孩子报声乐、儿童画、舞蹈和钢琴 4 个艺术兴趣班 ，她感到很惊讶，同时还有一些疑惑和不安： 艺术真有这么重要？这么早学有用吗？我家宝宝 4 岁了，要不要赶紧给他报个班？不报班学，会不会被落下？艺术",
      "coverUrl": "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FFIBFp81yz61hshl2bJhRdAKSkNPeveNxT9icGQ4Prz2pzKfoVgR87w5xeK64wP7J0c15jSedeib54DcF19vravUQ%2Fs640%3F",
      "author": "丁香妈妈",
      "newsId": "eea7bb63-5910-45d2-8013-1e04a718810f",
      "newsType": 0,
      "id": "a92efd16-a79d-4eb7-a94c-0f424f97b158",
      "createTime": "2017-06-20T23:00:58",
      "modifiedTime": "2017-06-20T23:00:58"
    },
    {
      "title": "地球人最想拥有的硬派SUV，究竟有何过人之处?",
      "publishTime": "1497964675",
      "description": "总结这次沙漠体验中，有同行的女司机还是第一次在沙漠开车，驾驶水平可谓稚嫩，但奔驰G级用强大的性能弥补了驾驶人的不足，也包容了很多不到位的操作，它强大到可以让人放心穿越无人区。而在戈壁的驾驶，AMG级SUV车型也用强大实力证明了它们并非只会在",
      "coverUrl": "http://img02.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FUFZRVjuicbPJRXnG1rumFibwnH2TrRWeYcAHoemj8jqTMBHC2OKVj5aiaVxHKubaGibdQpdMF4SQQW736IxCGeqnKw%2F0%3Fwx_fmt%3Djpeg",
      "author": "一起去SUV",
      "newsId": "e30ece36-091a-4964-9146-89167ee5a59a",
      "newsType": 0,
      "id": "ae22d7e0-913b-47ca-9bc0-a8fcf0b9e79e",
      "createTime": "2017-06-20T23:01:04",
      "modifiedTime": "2017-06-20T23:01:04"
    },
    {
      "title": "西安的风要大至刂我讠兑白勺讠舌者阝衤皮口欠昔攵了!",
      "publishTime": "1497964559",
      "description": "就在刚刚小编正在哼着小曲码字突然发现外面画风不对！风刮得窗户乱响树晃动得也是吓得惊人不多说，上视频↓↓↓再瞅瞅微信群和朋友圈更是各种现场播报↓↓↓陕西气象也在官方微博上连续发布了两条气象预警：#气象预警#陕西省气象台2017年6月19日19",
      "coverUrl": "http://img02.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FaB62JZ8H5NdicDezYljTVBgfAFKlapBuKYia3Xfh6HnHSp7VEW4PpSIHO9ao58lwC78w3WkOuzyMI1k07a3HLIfQ%2F0%3Fwx_fmt%3Dpng",
      "author": "陕西都市快报",
      "newsId": "4915296c-ef9c-4565-aabd-f45a232f8729",
      "newsType": 0,
      "id": "18036447-9907-404c-9d50-ea52abff15cb",
      "createTime": "2017-06-20T23:01:11",
      "modifiedTime": "2017-06-20T23:01:11"
    },
    {
      "title": "平底太矮，高跟太累?这三款中跟鞋承包整个夏天的舒适和美貌!",
      "publishTime": "1497964400",
      "description": "夏日热浪袭来，在找到舒适搭配穿着的同时，也别忘了给你的双脚放个“暑假”，但鞋子怎么穿才能满足舒适又时髦呢？平底太矮，高跟太累？不如试试这三款中跟鞋，显高又时尚才是王道～色彩鲜亮又舒适的中跟穆勒鞋，这个夏天可以来一打！从左至右：3.1 Phi",
      "coverUrl": "http://img04.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F7Jn3GYPMVgCEZMSNgEO5Xp0hEvE8UXwGu8BgGvR5jiafGWico2QrllvLyygVNQvZtfRv7w8JHia4z7jLI1auFAMsA%2F0%3Fwx_fmt%3Djpeg",
      "author": "时尚芭莎",
      "newsId": "3afe38ec-e07a-465e-a3e3-0a50d893b298",
      "newsType": 0,
      "id": "cc36d6c1-4152-44d0-8291-4099d7f16325",
      "createTime": "2017-06-20T23:01:20",
      "modifiedTime": "2017-06-20T23:01:20"
    },
    {
      "title": "央视刚刚曝光：太可怕了，速看，速看!",
      "publishTime": "1497963716",
      "description": "千万要当心！你看过后会震惊！提醒你身边经常使用这种充电方式的小伙伴！点 ↓阅读原文↓直击最新军事动态，热点追踪",
      "coverUrl": "http://img04.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FicGSvzj3k9v1iccV7Oiaovqtvl7Ly2tgXGDqtd7PfPNHHTlCIeWScefu4SRUqxwSKzowuibhdV6UbxHnPjM1iccEibkg%2F0%3Fwx_fmt%3Djpeg",
      "author": "军情观察",
      "newsId": "0051f945-55e0-449d-931e-50d79d9ed3c3",
      "newsType": 0,
      "id": "5eb2f101-ecf9-49f6-a192-7b664d25fd7d",
      "createTime": "2017-06-20T23:01:31",
      "modifiedTime": "2017-06-20T23:01:31"
    },
    {
      "title": "一道丧心病狂的数学题难倒了这个俄罗斯小姑娘..",
      "publishTime": "1497963415",
      "description": "本文转自：俄语之家RuclubID：loveeyu据说，每个被数学噩梦缠身的孩子都有过这样的经历！老师：“这是一道送分题！”我：“要不起……”因为一道数学题，这个俄罗斯胖姑娘和妈妈争执了40多分钟。。。问题：第三个小桶里有多少蘑菇？ 答：第",
      "coverUrl": "http://img02.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FkicpjPUqVw8pdmngEibltU5kOWxzcM6ZWogt4RdibX67zQfx1cq1Xp1sTxQ1q0ofgVVzDjegv5aUR9icYfTlwXm4FQ%2F0%3Fwx_fmt%3Djpeg",
      "author": "InsDaily",
      "newsId": "29057963-14f7-4719-be38-81621f02eec6",
      "newsType": 0,
      "id": "44798d1e-fa07-4c03-befa-e9cf1be6c43f",
      "createTime": "2017-06-20T23:01:36",
      "modifiedTime": "2017-06-20T23:01:36"
    },
    {
      "title": "11级巡洋称号或将易主?真正的巡洋杀手即将加入游戏!",
      "publishTime": "1497961645",
      "description": "《装甲战争》今日正式开启二测！今天AW项目组的同志们为我们战舰玩家准备了大量的稀有激活码，大家可以去本日各篇文章中领取哟！　　　　感谢SeaGroup！　　1937年开工的乔治五世国王级战列舰是按照1936年英国、美国和法国达成协议的“伦敦",
      "coverUrl": "http://img02.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FQ1xUykt06WP7iaZBALHOOw5g0KXfQrXumrhm4mDSh6uHXa9iboO769RziaPAHnoVicI3jcSd6n2vLQp3Vord3885kQ%2F0%3Fwx_fmt%3Djpeg",
      "author": "战舰世界",
      "newsId": "2af4f55a-2f99-4a48-b5cd-adadcdaff9b4",
      "newsType": 0,
      "id": "33e31a61-9db1-4c54-a396-95cf7ad8fd9e",
      "createTime": "2017-06-20T23:00:28",
      "modifiedTime": "2017-06-20T23:00:28"
    }
  ];
  constructor(public navCtrl: NavController, public http: Http) {
    //  this.http.get("http://localhost:52066/api/News/GetAllList?type=0&index=0").map(res => res.json()).subscribe(data => {
    //     this.posts = data;
    // });

  }

  doRefresh(refresher, id) {

    setTimeout(() => {
      console.log('Async operation has ended');
      //加载玩必须调用
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  //进入新闻详情
  getNewsInfo(id) {
    console.log(id);
  }
}

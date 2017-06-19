import {Http} from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts=[
    {
        "title": "在中国，要想车子动力不衰减，必须解决这个问题",
        "publishTime": "1497879063",
        "description": "当燃料在汽缸内不能完全燃烧时会产生众多的细粒和胶质久而久之在燃烧室内积聚就形成了积碳 积碳刚刚形成，还不是特别严重时会导致动力下降、油耗上升尾气污染物排放增加、车辆启动困难等当积碳严重时就会造成发动机的结构损坏例如活塞顶部、缸内喷油嘴、火花",
        "coverUrl": "http://img03.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FD9orBQKY3mbvqUUFQy0yyaId8fRuBbCRibfJE0eNsj3PmprHcgtBDyk3pCTLT0EEnA2cxYBnIl8B54JFCV8D4lg%2F0%3Fwx_fmt%3Djpeg",
        "author": "有车以后",
        "newsId": "c2cb31ee-fce5-40c7-a07d-35690cd33aed",
        "newsType": 0,
        "id": "d0f2c5d4-26e8-428e-8f28-c9f5418bcf19",
        "createTime": "2017-06-20T00:30:01",
        "modifiedTime": "2017-06-20T00:30:01"
    },
    {
        "title": "帅过王嘉尔，被何炅实力宠，这个行走的荷尔蒙靠的竟然是它!",
        "publishTime": "1497878936",
        "description": "FashionGirl电音，啤酒，尖叫，这个夏天赶紧和烦恼，疲惫say goodbye！FashionGirl(ID:i-fashiongirl）原创，转载务必获取授权。一直在追的《拜托了冰箱3》上周三收官了，明明是冲着不老男神何炅还有小鲜",
        "coverUrl": "http://img02.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FVWeJASsicOfVIOov0dXpXfJKzVIV3vOnlHAkZ36jwsO0icibcOwxiaic4Pojt2gygK1icZicgeHibasXyJiaaRfbKWvCaJA%2F0%3Fwx_fmt%3Dpng",
        "author": "FashionGirl",
        "newsId": "fd6b2a20-da1d-4d3a-a12d-bce2a5f219b0",
        "newsType": 0,
        "id": "a6530ab6-bbba-4819-9839-9ee2e772a757",
        "createTime": "2017-06-20T00:30:02",
        "modifiedTime": "2017-06-20T00:30:02"
    },
    {
        "title": "北京周边又一个新贵冉冉升起!蓟州区来了!",
        "publishTime": "1497878803",
        "description": "昨天小北和一个“蓟县”的朋友聊天说道：“周末去你们蓟县玩咯，乾隆爷不是说盘山比江南还好玩吗？”结果这位“蓟县”的朋友轻蔑地笑道：“北哥！请叫我们蓟州区或者蓟州，我们早就不是县了！”What？不是一直是“蓟县”吗？什么时候变成蓟州区了？这么大",
        "coverUrl": "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FeCUa11gTpQWUuySOxy9HujP3nvVmxT4m4ATyS4XpIDB7MNvehy37vxWhAHVyHJyWZ1cictYzibgYCPa78UpfJHkg%2F0%3Fwx_fmt%3Djpeg",
        "author": "最爱大北京",
        "newsId": "288a232c-433e-4e50-a46c-454a68d1f7e4",
        "newsType": 0,
        "id": "d313568b-8761-45e8-ae36-e43186a6cff7",
        "createTime": "2017-06-20T00:30:02",
        "modifiedTime": "2017-06-20T00:30:02"
    },
    {
        "title": "做爸爸实在是太惨了!",
        "publishTime": "1497878756",
        "description": "讲真做爸爸真的有点惨，往年就没见有啥父亲节礼物攻略，今年有了618大促，更是被忽视到天边去了。我也是今天早上看日历，发现上面有一行小小的，“父亲节”三个字，才想起来还有这节日。。。立马给我爸发了个红包。昨天你们零点都抢到自己想要的东西了吗?",
        "coverUrl": "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F4xZMhvvylG2yMMXrsKibXNbDduZH2Fd9vvvYQJN39ahsCCZx14DQPHgABPZiaYso3f0ttLuKqQ5hLicIic4Wia8t1rA%2F0%3Fwx_fmt%3Djpeg",
        "author": "LU一丝",
        "newsId": "9ee7445b-b2be-4245-94f1-12577130063c",
        "newsType": 0,
        "id": "c3791ef9-75fa-47c0-b1a7-2a90db7f378c",
        "createTime": "2017-06-20T00:30:03",
        "modifiedTime": "2017-06-20T00:30:03"
    },
    {
        "title": "出汗的10大惊人好处!看完我默默把空调关了…",
        "publishTime": "1497878559",
        "description": "夏天，很多人恨不得天天躲在“空调房”里，这就导致了夏天本该是出汗的季节，你却出不了汗！甚至还有一些人，出门时涂上止汗露等产品，以防汗水把衣服弄湿。　　其实，这些做法完全违背人体的生理规律，花尽心思让自己不出汗的养生法也是错误的。夏天出汗",
        "coverUrl": "http://img03.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FibQ2cXpBDzUNiaHhAoYXRawQJfoibGDBbaS4TFe6zYAwFOfB5KA3nHE4lj9bNtiaChlSmOP06pGxuX5U1ZcU33dEtw%2Fs640%3F",
        "author": "人民网",
        "newsId": "0534ba90-8c8e-451a-86c0-94b71a62ccb8",
        "newsType": 0,
        "id": "c3ce9d76-4efe-420c-a0bc-420c8e540a36",
        "createTime": "2017-06-20T00:30:03",
        "modifiedTime": "2017-06-20T00:30:03"
    },
    {
        "title": "什么!吃鼻子里挖出来的东西居然对人类有益?",
        "publishTime": "1497877824",
        "description": "大家好，我是小灞今天我还在是不是觉得我好棒棒《第044期 · 人体盛宴篇⑭》131.人在中午的时候更容易撒谎,因为人到中午的时候会比较疲倦,控制力下降,导致容易说谎。 132.41%男性撸过之后会有罪恶感。 133.蓝色会促进你的消费欲望和",
        "coverUrl": "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FkHWkicSsk3Q48654T4qAH2mbLRCa44eribO9fjDOIROhhTiby8DxbL4kmV8RoP45kMVKicTVy8gmQibYiccXKhzkUW9A%2F0%3Fwx_fmt%3Djpeg",
        "author": "奔波儿灞与灞波儿奔",
        "newsId": "c20f237c-79d7-4609-b19a-02b0ce598b56",
        "newsType": 0,
        "id": "6d377253-1dad-4663-b0bd-12ef4d8f44c9",
        "createTime": "2017-06-20T00:30:03",
        "modifiedTime": "2017-06-20T00:30:03"
    },
    {
        "title": "这篇文章被我爸发现了，轮椅上的我情绪稳定",
        "publishTime": "1497877076",
        "description": "马上是父亲节，我们来讲讲坑爹这个词的来历。据史料记载“坑爹”一词最早出现于魔兽世界，当时在巫妖王之怒版本开放之前，因为某个游戏漏洞，在新版本未开放时，等级上限还未解锁至80级时，一位玩家却能够获取经验，并升级到71级，此时的最高等级上限是7",
        "coverUrl": "http://img04.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2F45tvicia59sZvI9Mdgl1ibjqruWangdpJ7ogtcOLoicCJ1ic8sHHDAuD2b92aQq0Exrn49h74AHOpoAfFqF99yC2icwQ%2F0%3Fwx_fmt%3Dpng",
        "author": "每天正能量",
        "newsId": "632c02ad-4c6e-4e3e-a356-a623b2316dd7",
        "newsType": 0,
        "id": "dc5aa738-2424-4f32-a131-574306e1a60c",
        "createTime": "2017-06-20T00:30:03",
        "modifiedTime": "2017-06-20T00:30:03"
    },
    {
        "title": "早发现，早治疗，1/3 的癌症是可以预防的",
        "publishTime": "1497877021",
        "description": "远亲王伯父之前因为腹胀腹痛就医，医生怀疑是肠梗阻，入院做了急诊手术后，被确诊直肠癌晚期。 后来王伯父身上的肿瘤细胞转移到肝脏，错过最好的手术机会，没过几个月就走了。家人回忆起来，王伯父半年前就有便血，以为是「上火」，所以一直没有重视。便血是",
        "coverUrl": "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FPvr3FasqXd5yLVkU9IibmqElP2aGmcmKRzp0DPNFRYIyUPT3ayUiaBsANib8zH5eJzU9AeHgudDdTBriaUcgPek7Nw%2F0%3Fwx_fmt%3Djpeg",
        "author": "丁香医生",
        "newsId": "eaa31fc6-dfb8-4cbe-8075-df6224393845",
        "newsType": 0,
        "id": "5ed6b042-908d-450b-bca4-60af01d28621",
        "createTime": "2017-06-20T00:30:03",
        "modifiedTime": "2017-06-20T00:30:03"
    },
    {
        "title": "美一男孩游泳回来一周之后离奇死亡，“干性溺水”向所有人敲响警钟",
        "publishTime": "1497876899",
        "description": "逃妈的话：这个悲剧就发生在我们所在的地方，美国得克萨斯州的一个小男孩身上，好难受，也感觉离自己好近......愿他安息，也愿他的父母节哀。有关“干性溺水”的知识我之前也是完全不知道的，看得心惊胆战，有关孩子安全的事真的万万不可掉以轻心啊。马",
        "coverUrl": "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FptTMyngOkGjXYuWN5fbQJZ7j28exCVycE3zYY3MlEJOuEqiarBxA5Qe7DXNO2BWzXgiaJd8QXbyj0hIS9DMJbl8Q%2F0%3Fwx_fmt%3Djpeg",
        "author": "东西儿童教育",
        "newsId": "5313c8b7-2678-4f94-85d3-49c46f7b78e6",
        "newsType": 0,
        "id": "47e6145b-f86d-4d19-a21d-f13a04626d18",
        "createTime": "2017-06-20T00:30:03",
        "modifiedTime": "2017-06-20T00:30:03"
    },
    {
        "title": "不能忍!6岁男童遭后妈虐待，视网膜脱落、脑袋严重变形，已昏迷80多天",
        "publishTime": "1497876303",
        "description": "6岁男童，遭继母虐待，昏迷已有80多天……前段时间，媒体报道了陕西渭南这起恶性虐童事件。渭南警方称，鹏鹏的继母因涉嫌虐待罪，目前已被刑拘。▲受伤后与受伤前的鹏鹏柴小媛崩溃了。2017年1月19日，她最后一次看到出事前的儿子。那时，鹏鹏（化名",
        "coverUrl": "http://img03.sogoucdn.com/net/a/04/link?appid=100520033&url=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2F3OEpTPib0kV8ibWkFVNSsgJyVicINXj4ib7hJy8L1NuTYEWQSQYJML7bYhIIVeufKQtCGRS1OzNsgWAXW0zRc7xllg%2F0%3Fwx_fmt%3Dpng",
        "author": "南方都市报",
        "newsId": "a1b9b6a4-64f1-47ce-9e0b-4c9df7c4c4c9",
        "newsType": 0,
        "id": "86fdfe23-1f59-4750-a39c-337cab05761b",
        "createTime": "2017-06-20T00:30:04",
        "modifiedTime": "2017-06-20T00:30:04"
    }
];
  constructor(public navCtrl: NavController,public http:Http) {
    //  this.http.get("http://localhost:52066/api/News/GetAllList?type=0&index=0").map(res => res.json()).subscribe(data => {
    //     this.posts = data;
    //     console.log(this.posts);
    // });
 
  }

}

import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//http://16683n203x.iask.in/api/News/GetAllList?type=0&index=0
export class HomePage {
  //loading
  loading = this.LoadCtrl.create({
    content: "头条正在玩命加载中...请不要催促，程序员听了会打人的...",
    dismissOnPageChange: true,  //页面跳转是否关闭该loading
    showBackdrop: true,  //是否显示遮罩层
    spinner: "ios"  //显示的图标种类
  });
  host = "http://16683n203x.iask.in/";
  isAndroid: boolean = false;
  posts: any;
  //记录上滑刷新的页码数
  num: number = 1;
  type: number = 0;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, platform: Platform, public LoadCtrl: LoadingController) {
    //打开loading指示
    this.loading.present();
    this.isAndroid = platform.is('android');
    console.log(this.navParams.data.index);
    //首次发起请求
    this.http.get(this.host + "api/News/GetAllList?type=" + this.type + "&index=0").map(res => res.json()).subscribe(data => {
      this.posts = data;
      //加载数据完成，关闭loading
      this.loading.dismiss();
    });

  }

  //下拉加载最新
  doRefresh(refresher) {
    this.http.get(this.host + "api/News/GetAllList?type=" + this.type + "&index=0").map(res => res.json()).subscribe(data => {
      this.posts = data;
      refresher.complete();
    });
  }

  //上拉加载更多
  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.http.get(this.host + "api/News/GetAllList?type=" + this.type + "&index=" + this.num).map(res => res.json()).subscribe(data => {
        this.posts = this.posts.concat(data);
      });
      //每一次刷新，页码数自加一
      this.num++;
      resolve();
    })
  }

  //进入新闻详情
  getNewsInfo(id) {
    console.log(id);
    this.navCtrl.push(DetailsPage, {
      id: id
    });
  }
}

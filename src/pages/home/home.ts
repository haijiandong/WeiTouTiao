import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//http://16683n203x.iask.in/api/News/GetAllList?type=0&index=0
export class HomePage {
  posts:any;
  constructor(public navCtrl: NavController, public http: Http) {
     this.http.get("http://16683n203x.iask.in/api/News/GetAllList?type=0&index=0").map(res => res.json()).subscribe(data => {
        this.posts = data;
    });
  }

  doRefresh(refresher) {
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
    this.navCtrl.push(DetailsPage,{
      id:id
    });
  }
}

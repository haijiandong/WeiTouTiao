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
  posts: any;
  //记录上滑刷新的页码数
  num:number=1;
  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get("http://16683n203x.iask.in/api/News/GetAllList?type=0&index=0").map(res => res.json()).subscribe(data => {
      this.posts = data;
    });
  }

  doRefresh(refresher) {
    this.http.get("http://16683n203x.iask.in/api/News/GetAllList?type=0&index=0").map(res => res.json()).subscribe(data => {
      this.posts = data;
      refresher.complete();
    });
  }

  // doInfinite(infiniteScroll) {
  //   this.http.get("http://16683n203x.iask.in/api/News/GetAllList?type=0&index=1").map(res => res.json()).subscribe(data => {
  //       this.posts=this.posts.concat(data);
  //       console.log(data);
  //   });
  //   infiniteScroll.complete();

  // }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.http.get("http://16683n203x.iask.in/api/News/GetAllList?type=0&index="+this.num).map(res => res.json()).subscribe(data => {
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

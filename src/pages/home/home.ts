import {Http} from '.4.1.2@@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any;
  constructor(public navCtrl: NavController,public http:Http) {
     this.http.get("http://weixin.sogou.com/wapindex/wap/0612/wap_19/0.html").map(res => res.toString()).subscribe(data => {
        this.posts = data;
    });
 
  }

}

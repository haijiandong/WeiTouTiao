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
  posts:any;
  constructor(public navCtrl: NavController,public http:Http) {
     this.http.get("http://16683n203x.iask.in/api/News/GetAllList?type=0&index=0").map(res => res.json()).subscribe(data => {
        this.posts = data;
        console.log(this.posts);
    });
 
  }

}

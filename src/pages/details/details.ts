import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  content: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    console.log(this.navParams.data)//打印的是传过来的所有数据
    let id:string = navParams.get('id')
    //调用接口获取内容数据
     this.http.get("http://16683n203x.iask.in/api/News/GetContent?id="+id).map(res => res.json()).subscribe(data => {
        this.content = data;
        console.log(this.content);
    });
  }

  //加载完成
  ionViewDidLoad() {
    console.log('加载完成');
  }
}

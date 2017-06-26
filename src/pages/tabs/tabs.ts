import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SuperTabsController } from "ionic2-super-tabs/dist";
import { NavController } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  temp: any;
  tab1Root = HomePage;
  index: any = {
    type: 0
  };
  constructor(private superTabsCtrl: SuperTabsController, public navCtrl: NavController) {
    this.superTabsCtrl.showToolbar(false);
  }
  onTabSelect(ev: any) {
    this.tab1Root=HomePage;
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    this.index.type=ev.index;
    console.log(this.index);
  }
}

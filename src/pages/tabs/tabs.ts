import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShopPage;
  constructor() {

  }
}

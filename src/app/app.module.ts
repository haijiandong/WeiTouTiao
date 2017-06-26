import { HttpModule } from '@angular/http';
import { ShopPage } from './../pages/shop/shop';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule  } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JsonDisplayPipe } from '../pipes/json-display/json-display';
import { DetailsPage } from '../pages/details/details';
import { WelcomePage } from '../pages/welcome/welcome';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    DetailsPage,
    MyApp,
    HomePage,
    TabsPage,
    ShopPage,
    JsonDisplayPipe,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: "true", // nav在push的时候隐藏tabs  
      backButtonText: '',
      iconMode: 'ios',
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ShopPage,
    DetailsPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

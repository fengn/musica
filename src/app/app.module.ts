import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HeroPage } from '../pages/hero/hero';
import { DashboardPage } from '../pages/dashboard/dashboard';
//import { HeroDetailPage } from '../pages/hero-detail/hero-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicProvider } from '../providers/music/music';
import { KeysPipe } from '../pipes/keys/keys';

import { ComponentsModule } from '../components/components.module';
import { HeroProvider } from '../providers/hero/hero';
import { MessageProvider } from '../providers/message/message';
//import { InMemoryDataProvider } from '../providers/in-memory-data/in-memory-data';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HeroPage,
    DashboardPage,
    //HeroDetailPage,
    KeysPipe
  ],
  imports: [
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataProvider, { dataEncapsulation: false }),
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DashboardPage,
    //HeroDetailPage,
    HeroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicProvider,
    HeroProvider,
    MessageProvider,
    //InMemoryDataProvider
  ]
})
export class AppModule {}

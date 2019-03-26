import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HeroPage } from '../pages/hero/hero';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicProvider } from '../providers/music/music';
import { KeysPipe } from '../pipes/keys/keys';

import { ComponentsModule } from '../components/components.module';
import { HeroProvider } from '../providers/hero/hero';
import { MessageProvider } from '../providers/message/message';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HeroPage,
    KeysPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HeroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicProvider,
    HeroProvider,
    MessageProvider
  ]
})
export class AppModule {}

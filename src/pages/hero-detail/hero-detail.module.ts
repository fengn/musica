import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroDetailPage } from './hero-detail';

@NgModule({
  declarations: [
    HeroDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroDetailPage),
  ],
})
export class HeroDetailPageModule {}

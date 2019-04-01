import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Location } from '@angular/common';
/**
 * Generated class for the HeroDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'your-page',
    segment: 'another-path/:id'
  }
)
@Component({
  selector: 'page-hero-detail',
  templateUrl: 'hero-detail.html',
})
export class HeroDetailPage {
  
  selectedId: any;
  selectedName: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private location: Location) {
  	this.selectedId = navParams.get('id');
  	this.selectedName = navParams.get('name');
  	console.log(this.selectedId, this.selectedName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroDetailPage');
  }
  goBack(): void {
    this.location.back();
  }

}

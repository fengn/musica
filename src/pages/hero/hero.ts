import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../../pages/dashboard/dashboard';

/**
 * Generated class for the HeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hero',
  templateUrl: 'hero.html',
})
export class HeroPage {

	title = 'Tour of Heroes';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroPage');
  }

  dashboardPage(event) {
    // That's right, we're pushing to ourselves!
    //this.navCtrl.push(HeroPage);
  }

  heroesPage(event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DashboardPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroPage } from '../hero/hero';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  dashboardPage(event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HeroPage);
  }

  heroesPage(event) {
    // That's right, we're pushing to ourselves!
    //this.navCtrl.push(DashboardPage);
  }

}

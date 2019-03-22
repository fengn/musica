import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

import { MusicProvider } from '../../providers/music/music';
import { AllMusic } from '../home/allMusic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //public allMusic: any;

  public hotEvents = [];
  constructor(
    private loadingController: LoadingController,
  	public navCtrl: NavController,
  	private musicPrivider: MusicProvider) {
  }
  
  ionViewDidLoad(){
  	let allMusicLoadingController = this.loadingController.create({
  		spinner: 'ios',
  		content: "Getting your Music from Server"
  	});
  	allMusicLoadingController.present();
  	this.musicPrivider.getMusic()
  	  .subscribe(musicList => {
        allMusicLoadingController.dismiss();
  	  	//this.allMusic = musicList;
        this.hotEvents = musicList.data.hot_events;
        console.log(musicList.data.hot_events)
  	  });
  }
}

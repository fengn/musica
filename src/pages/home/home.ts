import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

import { MusicProvider } from '../../providers/music/music';
import { AllMusic } from '../home/allMusic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public allMusic: AllMusic;

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
        this.hotEvents = musicList as any;
  	  	//this.allMusic = musicList as any;
        //this.hotEvents = this.allMusic.data.hot_events;
        //console.log(this.hotEvents)
        //(musicList: AllMusic)
  	  });

    setTimeout(() => {
      allMusicLoadingController.dismiss();
    }, 5000);
  }

  addOneSong(refresher){
    this.musicPrivider.getOneSong()
      .subscribe(oneSong => {
        this.hotEvents.unshift(oneSong);
        refresher.complete();
      });
  }
}

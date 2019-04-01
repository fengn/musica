import { Component } from '@angular/core';
import { NavController,LoadingController, ActionSheetController } from 'ionic-angular';

import { MusicProvider } from '../../providers/music/music';
import { AllMusic } from '../home/allMusic';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public allMusic: AllMusic;

  public hotEvents = [];
  constructor(
    private socialSharing: SocialSharing,
    private actionSheetController: ActionSheetController,
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

  shareSong(music){
    let actionSheet = this.actionSheetController.create({
       title: 'Modify your album',
         buttons: [
           {
             text: 'facebook',
             icon: 'logo-facebook',
             role: 'destructive',
             handler: () => {
               console.log('facebook clicked');
               this.socialSharing.shareViaFacebook(music.name, music.image, music.music_url);
             }
           },
           {
             text: 'twitter',
             icon: 'logo-twitter',
             handler: () => {
               console.log('twitter clicked');
               this.socialSharing.shareViaTwitter(music.name, music.image, music.music_url);
             }
           },
           {
             text: 'Share',
             icon: 'share',
             handler: () => {
               console.log('share clicked');
               this.socialSharing.share(music.name, "", music.image, music.music_url);
             }
           },
           {
             text: 'Cancel',
             //icon: 'share',
             role: 'cancel',
             handler: () => {
               console.log('Cancel clicked');
             }
           }
         ]
      });
    actionSheet.present();
  }
}

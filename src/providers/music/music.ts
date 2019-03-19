import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const API:string = "https://orangevalleycaa.org/api/music";
@Injectable()
export class MusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicProvider Provider');
  }
  
  getMusic(){
  	return this.http.get(API);
  }

}

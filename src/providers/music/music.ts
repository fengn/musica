import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const API:string = "https://orangevalleycaa.org/api/music";
// const API:string = "http://localhost:8100/api?start_date=2018-08-20&end_date=2018-09-07";

const headers = new HttpHeaders()
            .set("access-token", "YzkxYWVmNDJjNmI2ZjRmNzQ0N2I0MmE0NGI3ODBlYWI6MTM5NjZmZjA5MzdlYTNjOWFmZWQzOTY4OTY4ZjI1NWU6L3B1YnNlbnQvaG90LWV2ZW50L2luZGV4");

@Injectable()
export class MusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicProvider Provider');
  }
  
  getMusic(){
  	//return this.http.get(API,{headers});
    return this.http.get(API);
  }

  getOneSong(){
    let oneSongUrl = API + "/id/1";
    return this.http.get(oneSongUrl);
  }

}

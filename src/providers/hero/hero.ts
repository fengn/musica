import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { HEROES, Hero } from '../hero/mock-heroes';
import { MessageProvider } from '../message/message';

/*
  Generated class for the HeroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroProvider {

  constructor(public http: HttpClient, private messageProvider: MessageProvider) {
    console.log('Hello HeroProvider Provider');
  }

	// getHeroes(): Hero[] {
	//   return HEROES;
	// }

	getHeroes(): Observable<Hero[]> {
		this.messageProvider.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}

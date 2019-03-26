import { Component } from '@angular/core';
import { Hero } from '../../providers/hero/mock-heroes';

import { HeroProvider } from '../../providers/hero/hero';
/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {
  
  heroes: Hero[] = [];
  
  constructor(private heroProvider: HeroProvider) {
    console.log('Hello DashboardComponent Component');
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroProvider.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

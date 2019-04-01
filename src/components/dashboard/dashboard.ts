import { Component } from '@angular/core';
import { Hero } from '../../providers/hero/mock-heroes';

import { HeroProvider } from '../../providers/hero/hero';
import { NavController } from 'ionic-angular';
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
  selectedHero: Hero;
  constructor(private heroProvider: HeroProvider,public navCtrl: NavController) {
    console.log('Hello DashboardComponent Component');
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroProvider.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    
    this.navCtrl.push('your-page', {
      'id': hero.id,
      'name': hero.name
    });
  }
}

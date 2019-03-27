import { Component } from '@angular/core';
import { Hero } from '../../providers/hero/mock-heroes';

import { HeroProvider } from '../../providers/hero/hero';
import { NavController } from 'ionic-angular';
import { HeroDetailPage } from '../../pages/hero-detail/hero-detail';

/**
 * Generated class for the HeroesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'heroes',
  templateUrl: 'heroes.html'
})
export class HeroesComponent {

  heroes: Hero[];
  selectedHero: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor(private heroPrivider: HeroProvider, public navCtrl: NavController) {
    console.log('Hello HeroesComponent Component');
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    
    this.navCtrl.push('your-page', {
      'id': hero.id,
      'name': hero.name
    });
  }

  getHeroes(): void {
  //this.heroes = this.heroPrivider.getHeroes();
  this.heroPrivider.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

}

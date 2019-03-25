import { Component } from '@angular/core';
import { HEROES, Hero } from '../heroes/mock-heroes';

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

  heroes = HEROES;
  selectedHero: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor() {
    console.log('Hello HeroesComponent Component');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

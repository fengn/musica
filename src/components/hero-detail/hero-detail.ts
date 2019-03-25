import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/mock-heroes';

/**
 * Generated class for the HeroDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hero-detail',
  templateUrl: 'hero-detail.html'
})
export class HeroDetailComponent {

  @Input() hero: Hero;
  constructor() {
    console.log('Hello HeroDetailComponent Component');
  }

}

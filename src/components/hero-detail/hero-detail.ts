import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello HeroDetailComponent Component');
    this.text = 'Hello World';
  }

}

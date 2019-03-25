import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello HeroesComponent Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';
import { MessageProvider } from '../../providers/message/message';

/**
 * Generated class for the MessagesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'messages',
  templateUrl: 'messages.html'
})
export class MessagesComponent {

  constructor(public messageProvider: MessageProvider) {
    console.log('Hello MessagesComponent Component');
  }

}

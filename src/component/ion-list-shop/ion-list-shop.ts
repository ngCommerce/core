import { Component } from '@angular/core';

/**
 * Generated class for the IonListShopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-shop',
  templateUrl: 'ion-list-shop.html'
})
export class IonListShopComponent {

  text: string;

  constructor() {
    console.log('Hello IonListShopComponent Component');
    this.text = 'Hello World';
  }

}

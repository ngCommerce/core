import { Component } from '@angular/core';

/**
 * Generated class for the IonItemShopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-item-shop',
  templateUrl: 'ion-item-shop.html'
})
export class IonItemShopComponent {

  text: string;

  constructor() {
    console.log('Hello IonItemShopComponent Component');
    this.text = 'Hello World';
  }

}

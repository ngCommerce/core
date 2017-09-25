import { Component } from '@angular/core';

/**
 * Generated class for the IonListProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-product',
  templateUrl: 'ion-list-product.html'
})
export class IonListProductComponent {

  text: string;

  constructor() {
    console.log('Hello IonListProductComponent Component');
    this.text = 'Hello World';
  }

}

import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonItemProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-item-product',
  templateUrl: 'ion-item-product.html'
})
export class IonItemProductComponent {

  text: string;

  constructor() {
    console.log('Hello IonItemProductComponent Component');
    this.text = 'ion item product';
  }

}

import { Component } from '@angular/core';

/**
 * Generated class for the IonItemCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-item-category',
  templateUrl: 'ion-item-category.html'
})
export class IonItemCategoryComponent {

  text: string;

  constructor() {
    console.log('Hello IonItemCategoryComponent Component');
    this.text = 'Hello World';
  }

}

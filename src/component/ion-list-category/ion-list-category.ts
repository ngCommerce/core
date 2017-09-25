import { Component } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-category',
  templateUrl: 'ion-list-category.html'
})
export class IonListCategoryComponent {

  text: string;

  constructor() {
    console.log('Hello IonListCategoryComponent Component');
    this.text = 'Hello World';
  }

}

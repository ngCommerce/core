import { Component, Input } from '@angular/core';

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
  @Input() items: any;
  text: string;

  constructor() {
    console.log('Hello IonListCategoryComponent Component');
    this.text = 'Hello World';
  }

}

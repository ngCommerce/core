import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-product',
  template: `
    <ion-list >
      <ion-item *ngFor="let item of items">
        <ion-thumbnail item-start>
            <img src="{{item.image}}">
        </ion-thumbnail>
        <h2>{{item.name}}</h2>
        <p>{{item.price}}</p>
      </ion-item>
    </ion-list>
    `,
  styles: [`
  ion-list-product {
    background-color: red;
  }`
  ]
})
export class IonListProductComponent {
  @Input() items: any;
  constructor() {
    // console.log('Hello IonListProductComponent Component');
  }

}

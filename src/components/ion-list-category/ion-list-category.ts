import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: `ion-list-category',
  template: '
    <ion-list >
      <ion-item *ngFor="let item of items">
        <h2>{{item.name}}</h2>
      </ion-item>
    </ion-list>
    `,
  styles: [`
  ion-list-category {
    background-color: red;
  }`
  ]
})
export class IonListCategoryComponent {
  @Input() items: any;
  constructor() {
    // console.log('Hello IonListCategoryComponent Component');
  }

}

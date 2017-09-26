import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: `ion-form-shop',
  template: '
    <ion-list>
        <ion-item>
            <ion-label floating >Name</ion-label>
            <ion-input type="text" [(ngModel)]="name"></ion-input>
        </ion-item>
        <ion-item>
            <ion-label floating >Image</ion-label>
            <ion-input type="text" [(ngModel)]="image"></ion-input>
        </ion-item>
        <button ion-button block color="dark">Add</button>
    </ion-list>
    `,
    styles: [`
  ion-form-shop {
    background-color: red;
  }`
    ]
})
export class IonFormShopComponent {
    @Input() items: any;
    constructor() {
        // console.log('Hello IonFormShopComponent Component');
    }

}

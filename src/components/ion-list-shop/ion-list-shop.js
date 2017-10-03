import { Component, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListShopComponent {
    constructor() {
        // console.log('Hello IonListShopComponent Component');
    }
}
IonListShopComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-shop',
                template: `
    <ion-list >
      <ion-item *ngFor="let item of items">
        <ion-avatar item-left>
            <img src="{{item.image}}">
        </ion-avatar>
        <h2>{{item.name}}</h2>
      </ion-item>
    </ion-list>
    `,
                styles: [`
  ion-list-shop {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonListShopComponent.ctorParameters = () => [];
IonListShopComponent.propDecorators = {
    'items': [{ type: Input },],
};
//# sourceMappingURL=ion-list-shop.js.map
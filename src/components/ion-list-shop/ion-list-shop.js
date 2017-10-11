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
        <ion-thumbnail item-start>
            <img src="{{item.image}}">
        </ion-thumbnail>
        <h2>{{item.name}}</h2>
        <div *ngIf="item.rate">
        <rating [(ngModel)]="item.rate" readOnly="false"  max="5"  emptyStarIconName="star-outline" halfStarIconName="star-half"starIconName="star" nullable="false"></rating>
        </div>
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
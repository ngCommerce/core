import { Component, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormShopComponent {
    constructor() {
        this.item = {};
        this.createShop = new EventEmitter();
        // console.log('Hello IonFormShopComponent Component');
    }
    addShop(item) {
        this.createShop.emit(item);
    }
}
IonFormShopComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-form-shop',
                template: `
    <ion-list>
        <ion-item>
            <ion-label floating >Name</ion-label>
            <ion-input type="text" [(ngModel)]="item.name"></ion-input>
        </ion-item>
        <ion-item>
            <ion-label floating >Image</ion-label>
            <ion-input type="text" [(ngModel)]="item.image"></ion-input>
        </ion-item>
        <button ion-button block color="dark" (click)="addShop(item)">Add</button>
    </ion-list>
    `,
                styles: [`
  ion-form-shop {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonFormShopComponent.ctorParameters = () => [];
IonFormShopComponent.propDecorators = {
    'createShop': [{ type: Output },],
};
//# sourceMappingURL=ion-form-shop.js.map
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
    imageList(e) {
        this.item.image = e[0];
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

        <p id="shopImg">Images</p>
        <ion-upload-image [maxImage]="1" (imageOutList)="imageList($event)"></ion-upload-image>

        <button ion-button block (click)="addShop(item)">Add</button>
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
import { Component, Input } from '@angular/core';
/**
 * Generated class for the IonListShopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListShopComponent {
    constructor() {
        console.log('Hello IonListShopComponent Component');
        this.text = 'Hello World';
    }
}
IonListShopComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-shop',
                templateUrl: 'ion-list-shop.html'
            },] },
];
/** @nocollapse */
IonListShopComponent.ctorParameters = () => [];
IonListShopComponent.propDecorators = {
    'items': [{ type: Input },],
};
//# sourceMappingURL=ion-list-shop.js.map
import { Component, Input } from '@angular/core';
/**
 * Generated class for the IonListProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListProductComponent {
    constructor() {
        console.log('Hello IonListProductComponent Component');
        this.text = 'Hello World';
    }
}
IonListProductComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-product',
                templateUrl: 'ion-list-product.html'
            },] },
];
/** @nocollapse */
IonListProductComponent.ctorParameters = () => [];
IonListProductComponent.propDecorators = {
    'items': [{ type: Input },],
};
//# sourceMappingURL=ion-list-product.js.map
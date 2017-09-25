import { Component, Input } from '@angular/core';
/**
 * Generated class for the IonListProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonListProductComponent = (function () {
    function IonListProductComponent() {
        console.log('Hello IonListProductComponent Component');
        this.text = 'Hello World';
    }
    return IonListProductComponent;
}());
export { IonListProductComponent };
IonListProductComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-product',
                templateUrl: 'ion-list-product.html'
            },] },
];
/** @nocollapse */
IonListProductComponent.ctorParameters = function () { return []; };
IonListProductComponent.propDecorators = {
    'items': [{ type: Input },],
};
//# sourceMappingURL=ion-list-product.js.map
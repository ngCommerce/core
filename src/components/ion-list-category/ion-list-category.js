import { Component, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListCategoryComponent {
    constructor() {
        // console.log('Hello IonListCategoryComponent Component');
    }
}
IonListCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-category',
                //templateUrl: 'ion-list-category.html'
                template: '<ion-list ><ion-item *ngFor="let item of items"><h2>{{item.name}}</h2></ion-item></ion-list>',
                styles: ['ion-list-category {background-color: red;}']
            },] },
];
/** @nocollapse */
IonListCategoryComponent.ctorParameters = () => [];
IonListCategoryComponent.propDecorators = {
    'items': [{ type: Input },],
};
//# sourceMappingURL=ion-list-category.js.map
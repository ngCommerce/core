import { Component, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListFavoriteComponent {
    constructor() {
        // console.log('Hello IonListProductComponent Component');
    }
}
IonListFavoriteComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-favorite',
                template: `
    <ion-list >
      <ion-item *ngFor="let item of items">
        <ion-thumbnail item-start>
            <img src="{{item.image}}">
        </ion-thumbnail>
        <h2>{{item.name}}</h2>
        <p>{{item.price}}</p>
      </ion-item>
    </ion-list>
    `,
                styles: [`
  ion-list-favorite {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonListFavoriteComponent.ctorParameters = () => [];
IonListFavoriteComponent.propDecorators = {
    'items': [{ type: Input },],
};
//# sourceMappingURL=ion-list-favorite.js.map
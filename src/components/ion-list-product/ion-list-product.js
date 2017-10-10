import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListProductComponent {
    constructor() {
        this.selectedProduct = new EventEmitter();
        this.delete = new EventEmitter();
        // console.log('Hello IonListProductComponent Component');
    }
    add(item) {
        this.selectedProduct.emit(item);
    }
    deleteProduct(item) {
        this.delete.emit(item._id);
    }
}
IonListProductComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-product',
                template: `
    <ion-list>
    <ion-item-sliding *ngFor="let item of items" (click)="add(item)">
      <ion-item>
      <ion-thumbnail item-start>
      <img src="{{item.image}}">
  </ion-thumbnail>
  <h2>{{item.name}}</h2>
  <p>{{item.price | number}} {{item.currency}}</p>
  <rating [(ngModel)]="item.rate" readOnly="false"  max="5"  emptyStarIconName="star-outline" halfStarIconName="star-half"starIconName="star" nullable="false"></rating>

      </ion-item>
      <ion-item-options side="right">
      <button ion-button color="danger" (click)="deleteProduct(item)">
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
    `,
                styles: [`
  ion-list-product {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonListProductComponent.ctorParameters = () => [];
IonListProductComponent.propDecorators = {
    'items': [{ type: Input },],
    'selectedProduct': [{ type: Output },],
    'delete': [{ type: Output },],
};
//# sourceMappingURL=ion-list-product.js.map
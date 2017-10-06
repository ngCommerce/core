import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListOrderComponent {
    constructor() {
        this.itemClicked = new EventEmitter();
        this.data = {};
        this.user = {
            shop: {
                _id: ''
            }
        };
        // console.log('Hello IonListProductComponent Component');
    }
    selectOrder(item) {
        this.data = item;
        // this.navCtrl.push(OrderDetailPage);
        this.itemClicked.emit(this.data);
    }
}
IonListOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-order',
                template: `
      <ion-list *ngIf="items">
      <p>Ord : {{item._id}}</p>
        <ion-item *ngFor="let item of items; let i = index" (click)="selectOrder(item)">
            <ion-thumbnail item-start>
            <img src="{{item.image}}">
        </ion-thumbnail>
        <div *ngIf="item.status === status">
        <p id="pName">{{item.name}}</p>
        <p id="pQty">{{item.qty}} qty</p>
        <p id="pPrice">{{item.price | number}} Baht</p>
        <p text-right id="pStatus" >{{item.status}}</p>
        </div>
        </ion-item>
      </ion-list>
    `,
                styles: [`
  ion-list-order {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonListOrderComponent.ctorParameters = () => [];
IonListOrderComponent.propDecorators = {
    'items': [{ type: Input },],
    'status': [{ type: Input },],
    'itemClicked': [{ type: Output },],
};
//# sourceMappingURL=ion-list-order.js.map
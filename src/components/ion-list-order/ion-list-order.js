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
  <div *ngIf="items">
  <div>
    <div *ngFor="let item of items; let i = index">
      <ion-list (click)="selectOrder(item)">
        <ion-item>
          <ion-row>
            <ion-col no-padding width-33 class="magin-right-10-custom">
              <img src="{{item.image}}">
            </ion-col>
            <ion-col *ngIf="item.status === status">
              <p id="pName">{{item.name}}</p>
              <p id="pQty">{{item.qty}} qty</p>
              <p id="pPrice">{{item.price | number}} Baht</p>
              <p text-right id="pStatus" >{{item.status}}</p>
            </ion-col>
          </ion-row>
        </ion-item>
      </ion-list>
    </div>
  </div>
</div>
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
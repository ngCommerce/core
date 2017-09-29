import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the SearchBarIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListCartComponent {
    constructor() {
        this.returnItems = new EventEmitter();
    }
    removeItem(index) {
        this.items.splice(index, 1);
        this.returnItems.emit(this.items);
    }
    decrease(item) {
        item.qty--;
        this.returnItems.emit(this.items);
    }
    increase(item) {
        item.qty++;
        this.returnItems.emit(this.items);
    }
}
IonListCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-cart',
                template: `
    <ion-list>
    <ion-item *ngFor="let item of items; let i = index">
      <ion-thumbnail item-start>
        <img [src]="item.product.images[0]">
      </ion-thumbnail>
      <h2>{{ item.product.name }}</h2>
      <p *ngIf="!item.product.promotionprice">{{ item.product.price }} {{ item.product.currency }}</p>
      <p *ngIf="item.product.promotionprice">{{ item.product.promotionprice }} {{ item.product.currency }}</p>
      <ion-grid>
        <ion-row>
          <ion-col col-6>
            <ion-icon name="trash" (click)="removeItem(i)"></ion-icon>
          </ion-col>
          <ion-col col-6>
            <button ion-button icon-only small>
            <ion-icon name="remove" (click)="decrease(item)"></ion-icon>
            </button>
            <label class="count">1</label>
            <button ion-button icon-only small>
            <ion-icon name="add" (click)="increase(item)"></ion-icon>
            </button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
  </ion-list>
  `,
                styles: [`
  
  `]
            },] },
];
/** @nocollapse */
IonListCartComponent.ctorParameters = () => [];
IonListCartComponent.propDecorators = {
    'items': [{ type: Input },],
    'returnItems': [{ type: Output },],
};
//# sourceMappingURL=ion-list-cart.js.map
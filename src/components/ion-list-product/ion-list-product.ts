import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-product',
  template: `
    <ion-list >
      <ion-item *ngFor="let item of items" (click)="add(item)">
        <ion-thumbnail item-start>
            <img src="{{item.image}}">
        </ion-thumbnail>
        <h2 id="name">{{item.name}}</h2>
        <p *ngIf="item.promotionprice"  id="promotionprice">{{item.promotionprice | number}} {{item.currency}}</p>
        <p> <span id="price"> {{item.price | number}} {{item.currency}}</span> <span  id="percentofdiscount"  *ngIf="item.percentofdiscount">-{{item.percentofdiscount}} %</span>
        </p>
        <rating [(ngModel)]="item.rate" readOnly="false"  max="5"  emptyStarIconName="star-outline" halfStarIconName="star-half"starIconName="star" nullable="false"></rating>
      </ion-item>
    </ion-list>
    `,
  styles: [`
  ion-list-product {
    background-color: red;
  }`
  ]
})
export class IonListProductComponent {
  @Input() items: any;
  @Output() selectedProduct: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    // console.log('Hello IonListProductComponent Component');
  }
  add(item) {
    this.selectedProduct.emit(item);
  }

}

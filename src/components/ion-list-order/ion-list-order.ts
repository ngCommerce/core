import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-order',
  template: `
      <ion-list *ngIf="items">
        <ion-item *ngFor="let item of items; let i = index" (click)="selectOrder(item)">
      <p>Ord : {{item.order_id}}</p>
            <ion-thumbnail item-start>
            <img src="{{item.image}}">
        </ion-thumbnail>
        <div *ngIf="item.status === status">
        <p id="pName">{{item.name}}</p>
        <p id="pQty">{{item.qty}} qty</p>
        <p *ngIf="item.promotionprice"  id="promotionprice">{{item.promotionprice | number}} {{item.currency}}</p>
        <p *ngIf="item.promotionprice && item.percentofdiscount"> <span id="price"> {{item.price | number}} {{item.currency}}</span> <span  id="percentofdiscount">-{{item.percentofdiscount}} %</span>        
        <p *ngIf="!item.promotionprice && !item.percentofdiscount"> <span id="priceNormal"> {{item.price | number}} {{item.currency}}</span>
        </p>
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
})
export class IonListOrderComponent {
  @Input() items: any;
  @Input() status: string;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  data: any = {};

  user: any = {
    shop: {
      _id: ''
    }
  };
  constructor() {
    // console.log('Hello IonListProductComponent Component');
  }
  selectOrder(item) {
    this.data = item;
    // this.navCtrl.push(OrderDetailPage);
    this.itemClicked.emit(this.data);
  }
}

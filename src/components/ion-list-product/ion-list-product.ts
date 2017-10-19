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
    <div *ngIf="showSearch">
      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>
    </div>
    <ion-row>
    <ion-list>
    <ion-item *ngFor="let item of items" (click)="add(item)">
      <ion-thumbnail item-start>
          <img src="{{item.image}}">
      </ion-thumbnail>
      <h2 id="name">{{item.name}}</h2>
      <p *ngIf="item.promotionprice" id="promotionprice">{{item.promotionprice | number}} {{item.currency}}</p>
      <p *ngIf="item.promotionprice && item.percentofdiscount"> <span id="price"> {{item.price | number}} {{item.currency}}</span> <span  id="percentofdiscount">-{{item.percentofdiscount}} %</span>        
      <p *ngIf="!item.promotionprice && !item.percentofdiscount"> <span id="priceNormal"> {{item.price | number}} {{item.currency}}</span>
      </p>
      <rating [(ngModel)]="item.rate" readOnly="false"  max="5"  emptyStarIconName="star-outline" halfStarIconName="star-half"starIconName="star" nullable="false"></rating>
    </ion-item>
  </ion-list>
  </ion-row>
    
    `,
  styles: [`
  ion-list-product {
    background-color: red;
  }`
  ]
})
export class IonListProductComponent {
  posts: any;
  @Input() items: any;
  @Input() showSearch: Boolean;
  @Output() selectedProduct: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    // console.log('Hello IonListProductComponent Component');
  }
  add(item) {
    this.selectedProduct.emit(item);
  }

  getItems(e) {
    if (!this.posts) {
      this.posts = this.items;
    } else {
      this.items = this.posts;
    }
    // set val to the value of the searchbar
    let val = e.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

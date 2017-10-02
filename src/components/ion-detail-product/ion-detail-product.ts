import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-detail-product',
  template: `
  <ion-slides pager="true" *ngIf="item.images && item.images.length > 0">
  <ion-slide *ngFor="let image of item.images">
    <img src="{{image}}">
  </ion-slide>
</ion-slides>
<ion-grid>
    <ion-row>
        <ion-col>
            <p>{{item.name}}</p>
            <p>{{item.detail}}</p>
            <p *ngIf="item.promotionprice">
                <span>{{item.promotionprice | number}} {{item.currency}}</span>
                <span>{{item.price | number}} {{item.currency}}</span>
                <span>-{{item.percentofdiscount}} %</span>
            </p>
            <h4 *ngIf="!item.promotionprice">{{item.price}} {{item.currency}}</h4>

        </ion-col>
    </ion-row>
    <ion-row *ngIf="item.rate">
        <ion-col width-50>
            <rating [(ngModel)]="item.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
                starIconName="star" nullable="false"></rating>
        </ion-col>
        <ion-col width-50 text-right>
            <button ion-button color="danger" clear icon-only>
                <ion-icon name='ios-share-outline' is-active="false"></ion-icon>
            </button>
            <button ion-button color="danger" clear icon-only>
                    <ion-icon [name]='nameOfLike' is-active="false" ></ion-icon>
            </button>
        </ion-col>
    </ion-row>
</ion-grid>
<ion-row  *ngIf="item.shippings && item.shippings.length > 0">
    <ion-col text-left>
        วิธีการจัดส่ง
    </ion-col>
</ion-row>
<ion-list *ngIf="item.shippings && item.shippings.length > 0">
    <ion-item-divider *ngFor="let shipping of item.shippings">
        <ion-icon item-start name="ios-archive-outline"></ion-icon> {{shipping.name}}
    </ion-item-divider>
    <ion-item-divider *ngIf="item.cod">
        <ion-icon item-start name="ios-cash-outline"></ion-icon> สามารถชำระเงินปลายทางได้
    </ion-item-divider>
</ion-list>
<ion-row *ngIf="item.shop">
    <ion-col text-left>
        คนขาย
    </ion-col>
</ion-row>
<ion-grid *ngIf="item.shop">
    <ion-row>
        <ion-col>
            <span >{{item.shop.name}}</span>
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col text-left>
            <rating [(ngModel)]="item.shop.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
                starIconName="star" nullable="false"></rating>
        </ion-col>
    </ion-row>
</ion-grid>
    `,
  styles: [`
  ion-detail-product {
    background-color: red;
  }`
  ]
})
export class IonDetailProductComponent {
  @Input() item: any;
  constructor() {
    // console.log('Hello IonListCategoryComponent Component');
  }
 

}

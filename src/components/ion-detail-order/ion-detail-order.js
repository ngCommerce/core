import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonDetailOrderComponent {
    constructor() {
        this.selectedFavorite = new EventEmitter();
        // console.log('Hello IonListCategoryComponent Component');
    }
}
IonDetailOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-detail-order',
                template: `
    <img src="{{item.image}}">
<ion-grid id="gridDetail">
    <ion-row>
        <ion-col id="colProduct">
        <p>{{item.name}}</p>
        <p>{{item.detail}}</p>
        <p *ngIf="item.promotionprice">
            <span id="promotionprice" *ngIf="item.promotionprice">{{item.promotionprice}} {{item.currency}}</span>
            <span *ngIf="item.promotionprice && item.percentofdiscount" id="price">{{item.price}} {{item.currency}}</span>
            <span id="percentofdiscount" *ngIf="item.percentofdiscount">-{{item.percentofdiscount}} %</span>
        </p>
        <span *ngIf="!item.promotionprice && !item.percentofdiscount" id="priceNormal">{{item.price}} {{item.currency}}</span> 
        </ion-col>
        <ion-row>
        <ion-col>
            <span> {{item.rate}} </span> <span>From 5</span>
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col>
            <span>{{item && item.reviews && item.reviews.length > 0 ? item.reviews.length : 0}} รีวิว</span>
        </ion-col>
    </ion-row>
    </ion-row>
    <ion-row *ngIf="item.rate">
        <ion-col width-50 id="colRate">
            <rating [(ngModel)]="item.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
                starIconName="star" nullable="false"></rating>
        </ion-col>
      
    </ion-row>
</ion-grid>
<ion-list>
<ion-item>
<h3>
  <ion-icon name="md-car"></ion-icon> Shipping</h3>
<div>

  <p id="delName">จัดส่ง : {{item.delivery.name}}</p>
  <p id="delDetail">  {{item.delivery.detail}} </p>
  <p id="delPrice"> ค่าจัดส่ง {{item.delivery.price}} บาท</p>

</div>
</ion-item>
<ion-item>
<h3>
  <ion-icon name="ios-cash"></ion-icon> Delivery</h3>
<div *ngIf="item.shipping">
  <p id="shipAddress">ที่อยู่ : {{item.shipping.address}}</p>
  <p id="shipSubdistrict">  ตำบล {{item.shipping.subdistrict}} </p>
  <p id="shipDistrict"> อำเภอ {{item.shipping.district}} </p>
  <p id="shipProvince"> จังหวัด {{item.shipping.province}} </p>
  <p id="shipPostcode"> รหัสไปรษณีย์ {{item.shipping.postcode}} </p>
</div>
</ion-item>
</ion-list>
    `,
                styles: [`
  ion-detail-order {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonDetailOrderComponent.ctorParameters = () => [];
IonDetailOrderComponent.propDecorators = {
    'item': [{ type: Input },],
    'selectedFavorite': [{ type: Output },],
};
//# sourceMappingURL=ion-detail-order.js.map
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
            <p id="pName">{{item.name}}</p>    
            <h4 *ngIf="!item.promotionprice">{{item.price}} {{item.currency}}</h4>
        </ion-col>
    </ion-row>
    <ion-row *ngIf="item.rate">
        <ion-col width-50 id="colRate">
            <rating [(ngModel)]="item.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
                starIconName="star" nullable="false"></rating>
        </ion-col>
      
    </ion-row>
</ion-grid>
<ion-list>
<ion-item>
<h3>
  <ion-icon name="md-car"></ion-icon> Shipping</h3>
<div>

  <span id="delName">จัดส่ง : {{item.delivery.name}}</span>
  <span id="delDetail">  {{item.delivery.detail}} </span>
  <span id="delPrice"> ค่าจัดส่ง {{item.delivery.price}} บาท</span>

</div>
</ion-item>
<ion-item>
<h3>
  <ion-icon name="ios-cash"></ion-icon> Delivery</h3>
<div *ngIf="item.shipping">
  <span id="shipAddress">ที่อยู่ : {{item.shipping.address}}</span>
  <span id="shipSubdistrict">  ตำบล {{item.shipping.subdistrict}} </span>
  <span id="shipDistrict"> อำเภอ {{item.shipping.district}} </span>
  <span id="shipProvince"> จังหวัด {{item.shipping.province}} </span>
  <span id="shipPostcode"> รหัสไปรษณีย์ {{item.shipping.postcode}} </span>
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
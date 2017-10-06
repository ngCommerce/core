import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
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
})
export class IonDetailOrderComponent {
    @Input() item: any;
    @Output() selectedFavorite: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        // console.log('Hello IonListCategoryComponent Component');
    }
    
}

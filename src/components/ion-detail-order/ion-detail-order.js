"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let IonDetailOrderComponent = class IonDetailOrderComponent {
    constructor() {
        this.selectedFavorite = new core_1.EventEmitter();
        // console.log('Hello IonListCategoryComponent Component');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonDetailOrderComponent.prototype, "item", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonDetailOrderComponent.prototype, "selectedFavorite", void 0);
IonDetailOrderComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [])
], IonDetailOrderComponent);
exports.IonDetailOrderComponent = IonDetailOrderComponent;
//# sourceMappingURL=ion-detail-order.js.map
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
let IonFormConfirmComponent = class IonFormConfirmComponent {
    constructor() {
        this.gotoNext = new core_1.EventEmitter();
        // console.log('Hello IonFormConfirmComponent Component');
    }
    discount(data) {
        if (data && data > 0) {
            if (this.confirmgateway.order.amount && this.confirmgateway.order.amount >= data) {
                this.confirmgateway.order.discount = data;
            }
            else {
                this.confirmgateway.order.discount = this.confirmgateway.order.amount;
            }
        }
        else {
            this.confirmgateway.order.discount = 0;
        }
    }
    stepValidation() {
        if (this.confirmgateway.order.discount && this.confirmgateway.order.discount > 0 && !undefined) {
            this.confirmgateway.order.totalamount = ((this.confirmgateway.order.deliveryprice || 0) + (this.confirmgateway.order.amount || 0)) - (this.confirmgateway.order.discount || 0);
        }
        else {
            this.confirmgateway.order.totalamount = ((this.confirmgateway.order.deliveryprice || 0) + (this.confirmgateway.order.amount || 0));
        }
        this.gotoNext.emit(this.confirmgateway.order);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormConfirmComponent.prototype, "confirmgateway", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormConfirmComponent.prototype, "gotoNext", void 0);
IonFormConfirmComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-confirm',
        template: `
    <ion-content *ngIf="confirmgateway.order">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-list no-lines>
            <ion-item>
              <p>มูลค่าสินค้า</p>
              <p item-end>{{confirmgateway.order.amount | number}} บาท</p>
            </ion-item>
            <ion-item>
              <p>ค่าธรรมเนียมการจัดส่งสินค้า</p>
              <p item-end>{{confirmgateway.order.deliveryprice | number}} บาท</p>
            </ion-item>
            <ion-row>
              <ion-col col-8>
                <ion-item>
                  <ion-input type="text" [(ngModel)]="confirmgateway.order.discount" (ngModelChange)="discount(confirmgateway.order.discount)" placeholder="ใส่โค้ดส่วนลดตรงนี้"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col col-4>
                <button ion-button block color="warning" (click)="discount(confirmgateway.order.discount)">ยืนยัน</button>
              </ion-col>
            </ion-row>
            <ion-item>
              <p><b>ยอดสุทธิ (รวมภาษีมูลค่าเพิ่ม)</b></p>
              <p item-end><b>{{((confirmgateway.order.deliveryprice || 0) + (confirmgateway.order.amount || 0)) - (confirmgateway.order.discount || 0) | number}} บาท</b></p>
            </ion-item>
          </ion-list>
          <ion-item-group>
            <ion-item-divider color="light"><b>รายการ</b></ion-item-divider>
          </ion-item-group>
          <div>
            <ion-list *ngFor="let item of confirmgateway.order.items">
              <ion-item>
                <ion-row>
                  <ion-col col-12 id="shopName-col">
                    <p>{{item.product.shop.name}}</p>
                  </ion-col>
                </ion-row>
                <ion-row no-padding>
                  <ion-col no-padding width-20>
                  <img src="{{item.product.images[0]}}">
                  </ion-col>
                  <ion-col no-padding width-60>
                    <h3>{{item.product.name}}</h3>
                    <p>จำนวน: {{item.qty}}</p>
                  </ion-col>
                  <ion-col no-padding width-20>
                    <p>{{item.product.price}} บาท</p>
                  </ion-col>
                </ion-row>

                <ion-row>
                <ion-col id="shippingMethod-col">
                  <p>{{'วิธีจัดส่ง'}}</p>
                </ion-col>
                </ion-row>
                
                <ion-row>
                  <ion-col>
                    <p>{{item.delivery.name}}</p>
                    <p>{{item.delivery.detail}}</p>
                  </ion-col>
                </ion-row>

              </ion-item>
            </ion-list>
            <ion-row>
              <p>ที่อยู่จัดส่ง</p>
              <ion-col col-12>
                <p>{{confirmgateway.order.shipping.firstname}} {{confirmgateway.order.shipping.lastname}}</p>
                <p>{{confirmgateway.order.shipping.address}} {{confirmgateway.order.shipping.subdistrict}} {{confirmgateway.order.shipping.district}}
                  {{confirmgateway.order.shipping.province}} {{confirmgateway.order.shipping.postcode}}
                </p>
                <p>โทร : {{confirmgateway.order.shipping.tel}}</p>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col col-12>
                <button ion-button block color="warning" (click)="stepValidation()">สั่งสินค้า</button>
              </ion-col>
            </ion-row>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
    `,
        styles: [`
  ion-form-confirm {
    
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonFormConfirmComponent);
exports.IonFormConfirmComponent = IonFormConfirmComponent;
//# sourceMappingURL=ion-form-confirm.js.map
import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-confirm',
    template: `
    <ion-content *ngIf="confirmgateway.order">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-list no-lines>
            <ion-item>
              <p>มูลค่าสินค้า</p>
              <p item-end>{{confirmgateway.order.amount | number}} THB</p>
            </ion-item>
            <ion-item>
              <p>ค่าธรรมเนียมการจัดส่งสินค้า</p>
              <p item-end>{{confirmgateway.order.deliveryprice | number}} THB</p>
            </ion-item>
            <ion-row>
              <ion-col col-8>
                <ion-item>
                  <ion-input type="text" placeholder="ใส่โค้ดส่วนลด"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col col-4>
                <button ion-button block color="warning" (click)="discount(confirmgateway.order.discount)">ยืนยัน</button>
              </ion-col>
            </ion-row>
            <ion-item>
              <p><b>ยอดสุทธิ (รวมภาษีมูลค่าเพิ่ม)</b></p>
              <p item-end><b>{{((confirmgateway.order.deliveryprice || 0) + (confirmgateway.order.amount || 0)) - (confirmgateway.order.discount || 0) | number}} THB</b></p>
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
                    <p>{{item.product.price}} {{item.product.currency}}</p>
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
})
export class IonFormConfirmComponent {
    data: any;
    @Input() confirmgateway: any;
    @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
    confirmdiscount: number;
    constructor() {
        // console.log('Hello IonFormConfirmComponent Component');
    }
    discount(data) {
        if (data && data > 0) {
            if (this.confirmgateway.order.amount && this.confirmgateway.order.amount >= data) {
                this.confirmgateway.order.discount = data;
            } else {
                this.confirmgateway.order.discount = this.confirmgateway.order.amount;
            }
        } else {
            this.confirmgateway.order.discount = 0;
        }
    }
    stepValidation() {

        if (this.confirmgateway.order.discount && this.confirmgateway.order.discount > 0 && !undefined) {
            this.confirmgateway.order.totalamount = ((this.confirmgateway.order.deliveryprice || 0) + (this.confirmgateway.order.amount || 0)) - (this.confirmgateway.order.discount || 0);
        } else {
            this.confirmgateway.order.totalamount = ((this.confirmgateway.order.deliveryprice || 0) + (this.confirmgateway.order.amount || 0));
        }
        this.gotoNext.emit(this.confirmgateway.order);
    }

}

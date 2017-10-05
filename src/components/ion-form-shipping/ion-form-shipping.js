import { Component, Output, EventEmitter, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormShippingComponent {
    constructor() {
        this.gotoNext = new EventEmitter();
        this.createAddress = new EventEmitter();
        this.address = {};
        this.data = {
            order: {
                shipping: {},
                items: [],
                payment: {},
                amount: 0,
                discount: 0,
                totalamount: 0,
                deliveryprice: 0
            }
        };
        // console.log('Hello IonFormShippingComponent Component');
    }
    selectaddress(data) {
        this.data.order.shipping = data;
    }
    openModal() {
        this.createAddress.emit('push model');
    }
    setproduct(product, shipping) {
        var checkProduct = false;
        if (this.data.order.items && this.data.order.items.length > 0) {
            // console.log('+++++++++++++++++++++++++++++++++');
            this.data.order.items.forEach(itm => {
                if (itm.product.name === product.product.name) {
                    itm.delivery = shipping;
                    checkProduct = true;
                }
            });
        }
        if (!checkProduct) {
            this.data.order.items.push({
                product: product.product,
                qty: product.qty,
                amount: (product.product.price || 0) * (product.qty),
                delivery: shipping,
                price: product.product.price,
                discount: product.discount,
                afterdiscount: (product.amount || 0) - (product.discount || 0)
            });
        }
        console.log(this.data.order);
    }
    stepValidation() {
        if (this.data.order.shipping && this.data.order.shipping.address) {
            if (this.data.order.items.length === this.listshipping.items.length) {
                this.data.order.items.forEach(itm => {
                    console.log(itm);
                    this.data.order.deliveryprice += itm.delivery.price || 0;
                    this.data.order.discount += itm.discount || 0;
                    this.data.order.amount += itm.amount || 0;
                    this.data.order.totalamount += itm.afterdiscount || 0;
                });
                this.gotoNext.emit(this.data);
            }
            else {
                alert('Please select products');
            }
        }
        else {
            alert('Please select shipping');
        }
    }
}
IonFormShippingComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-form-shipping',
                template: `
    <ion-content>
    <ion-label> {{'การจัดส่งสินค้า'}} </ion-label>
    <ion-list radio-group>
        <ion-item *ngFor="let item of listaddress.address" (click)="selectaddress(item)">
            <ion-label>
                <ion-row>
                    <ion-col width-33>
                        <p>{{item.firstname}} {{item.lastname}}</p>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col width-100>
                        <p>{{item.address}} {{item.district}} {{item.subdistrict}} {{item.province}} {{item.postcode}}</p>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col width-33>
                        <p style="word-wrap: break-word">{{item.tel}}</p>
                    </ion-col>
                </ion-row>
            </ion-label>
            <ion-radio (click)="selectaddress(item)"></ion-radio>
        </ion-item>
    </ion-list>
    <ion-label (click)="openModal()">{{'เพิ่มที่อยู่ใหม่'}}</ion-label>
    <ion-label> {{'โปรดเลือกแบบของการส่งสินค้า'}} </ion-label>
    <ion-list>
        <div *ngFor="let item of listshipping.items">
        <b padding-left>{{item.product.shop.name}}</b>
        <ion-item>
        <ion-thumbnail item-start>
        <img src="{{item.product.images[0]}}">
      </ion-thumbnail>
            <h2>{{item.product.name}}</h2>
            <p> {{item.qty}} {{'QTY'}}</p>
            <h3 text-right>รวม {{item.totalamount | number}} {{'บาท'}}</h3>
        </ion-item>
            <ion-row>
                <ion-col width-100>
                    <p>{{'วิธีจัดส่ง'}}</p>
                </ion-col>
            </ion-row>
            
            <ion-list radio-group>
                <ion-item *ngFor="let itm of item.product.shippings" (click)="setproduct(item,itm)">
                    <ion-label>
                        <p>{{itm.name}}</p>
                        <p>{{itm.detail}}</p>
                    </ion-label>
                    <ion-radio (click)="setproduct(item,itm)"></ion-radio>
                </ion-item>
            </ion-list>
        </div>
    </ion-list>
    <ion-grid>
        <div *ngIf="listshipping.items && listshipping.items.length > 0">
            <ion-row>
                <ion-col width-50>
                    <p>{{'ราคารวม'}}</p>
                    <p>{{'ส่วนลด'}}</p>
                    <p>{{'รวมสุทธิ'}}</p>
                </ion-col>
                <ion-col width-50>
                    <p text-right>{{listshipping.amount | number}} {{'บาท'}}</p>
                    <p text-right>{{listshipping.discount | number}} {{'บาท'}}</p>
                    <p text-right>{{listshipping.totalamount | number}} {{'บาท'}}</p>
                </ion-col>
            </ion-row>
        </div>
    </ion-grid>
    <ion-grid>
        <button ion-button full color="danger" (click)="stepValidation()">{{'ดำเนินการชำระเงิน'}}</button>
    </ion-grid>
</ion-content>
    `,
                styles: [`
  ion-form-shipping {
    
  }`
                ]
            },] },
];
/** @nocollapse */
IonFormShippingComponent.ctorParameters = () => [];
IonFormShippingComponent.propDecorators = {
    'listaddress': [{ type: Input },],
    'listshipping': [{ type: Input },],
    'gotoNext': [{ type: Output },],
    'createAddress': [{ type: Output },],
};
//# sourceMappingURL=ion-form-shipping.js.map
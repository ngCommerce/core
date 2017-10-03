import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-shipping',
    template: `
    <ion-content>
    <ion-label> {{'SHIPPING'}} </ion-label>
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
    <ion-label (click)="openModal()">{{'ADD_NEW_ADDRESS'}}</ion-label>
    <ion-label> {{'PLEASE_SELECT_THE_TYPE_OF_SHIPMENT'}} </ion-label>
    <ion-list>
        <div *ngFor="let item of listshipping.items">
            <ion-item>
                <ion-row>
                    <ion-col width-15>
                        <p>{{item.product.shop.name}}</p>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col no-padding width-33 class="magin-right-10-custom">
                    <p>preload-image</p>
                    </ion-col>
                    <ion-col>
                        <p>{{item.product.name}}</p>
                        <p>{{item.qty}} {{'QTY'}}</p>
                        <p>{{item.product.price | number}} Baht</p>
                        <p text-right>รวม {{item.product.price * item.qty | number}} {{'CURRENCY'}}</p>
                    </ion-col>
                </ion-row>
            </ion-item>
            <ion-row>
                <ion-col width-100>
                    <p>{{'SHIPPINGMETHOD'}}</p>
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
                    <p>{{'TOTAL_PRICE'}}</p>
                    <p>{{'DISCOUNT'}}</p>
                    <p>{{'TOTAL_NET'}}</p>
                </ion-col>
                <ion-col width-50>
                    <p text-right>{{listshipping.amount | number}} {{currency}}</p>
                    <p text-right>{{listshipping.discount | number}} {{currency}}</p>
                    <p text-right>{{listshipping.totalamount | number}} {{currency}}</p>
                </ion-col>
            </ion-row>
        </div>
    </ion-grid>
    <ion-grid>
        <button ion-button full color="danger" (click)="stepValidation()">{{'PAYMENT'}}</button>
    </ion-grid>
</ion-content>
    `,
    styles: [`
  ion-form-shipping {
    
  }`
    ]
})
export class IonFormShippingComponent {
    @Input() listaddress: Array<any>;
    @Input() listshipping: any;
    @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
    @Output() createAddress: EventEmitter<any> = new EventEmitter<any>();

    address = {};
    data: any = {
        order: {
            shipping: {},
            items: [],
            payment: {},
            amount: 0,
            discount: 0,
            totalamount: 0,
            tran: 0
        }
    };
    constructor() {
        // console.log('Hello IonFormShippingComponent Component');
    }

    selectaddress(data) {
        this.data.order.shipping = data;
    }
    openModal() {
        this.createAddress.emit('push model');
    }
    setproduct(product, shipping) {
        let checkProduct = false;
        if (this.data.order.items && this.data.order.items.length > 0) {
            this.data.order.items.forEach(itm => {
                if (itm.product.name === product.product.name) {
                    itm.delivery = shipping.shipping;
                    checkProduct = true;
                }
            });
        }
        if (!checkProduct) {
            this.data.order.items.push({
                product: product.product,
                qty: product.qty,
                amount: (product.amount || 0) * (product.qty),
                delivery: shipping.shipping,
                price: product.product.price,
                discount: product.discount,
                afterdiscount: (product.amount || 0) - (product.discount || 0)
            });
        }
    }
    stepValidation() {
        if (this.data.order.shipping && this.data.order.shipping.address) {
            if (this.data.order.items.length === this.listshipping.items.length) {
                this.data.order.items.forEach(itm => {
                    this.data.order.tran += itm.delivery.price || 0;
                    this.data.order.discount += itm.discount || 0;
                    this.data.order.amount += itm.amount || 0;
                    this.data.order.totalamount += itm.afterdiscount || 0;
                });
                this.gotoNext.emit(this.data);
            } else {
                alert('Please select products');
            }
        } else {
            alert('Please select shipping');
        }
    }

}

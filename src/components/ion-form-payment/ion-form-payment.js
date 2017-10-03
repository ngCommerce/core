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
let IonFormPaymentComponent = class IonFormPaymentComponent {
    constructor() {
        this.data = {};
        this.datapayment = {};
        this.gotoNext = new core_1.EventEmitter();
        this.datapaymentData = new core_1.EventEmitter();
        this.channel = 'credit';
        // console.log('Hello IonFormPaymentComponent Component');
    }
    paymentType(e) {
        this.datapayment = e;
    }
    formcredit(e) {
        if (e.creditno) {
            this.datashipping.order.payment.creditno = e.creditno;
        }
        if (e.creditname) {
            this.datashipping.order.payment.creditname = e.creditname;
        }
        if (e.expdate) {
            this.datashipping.order.payment.expdate = e.expdate;
        }
        if (e.creditcvc) {
            this.datashipping.order.payment.creditcvc = e.creditcvc;
        }
    }
    stepValidation() {
        this.datapayment = this.datashipping;
        let chk = false;
        if (this.datapayment.order && this.datapayment.order.payment && this.datapayment.order.payment.paymenttype) {
            if (this.datapayment.order.payment.paymenttype === 'credit') {
                if (this.datapayment.order.payment.creditno && this.datapayment.order.payment.creditname && this.datapayment.order.payment.expdate && this.datapayment.order.payment.creditcvc) {
                    chk = true;
                }
            }
            else if (this.datapayment.order.payment.paymenttype === 'delivery') {
                chk = true;
            }
            else if (this.datapayment.order.payment.paymenttype === 'bank') {
                if (this.datapayment.order.payment.counterservice) {
                    chk = true;
                }
            }
        }
        else {
            this.datapayment.order.payment.paymenttype = this.channel;
        }
        if (chk) {
            this.gotoNext.emit(this.datapayment);
        }
        else {
            alert('Please enter your payment');
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormPaymentComponent.prototype, "paymentgateway", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormPaymentComponent.prototype, "datashipping", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormPaymentComponent.prototype, "gotoNext", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormPaymentComponent.prototype, "datapaymentData", void 0);
IonFormPaymentComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-payment',
        template: `
  <ion-form-paymentoption [paymentgateway]="paymentgateway.payment" [datashipping]="datashipping" (datapayment)="paymentType($event)"
  [(channel)]="channel">
  <ion-form-credit [value]="'credit'" (datacredit)="formcredit($event)"></ion-form-credit>
  <ion-form-delivery [value]="'delivery'"></ion-form-delivery>
  <ion-form-counterservice [value]="'bank'" [paymentgateway]="paymentgateway.counterservice" [datapayment]="datapayment"></ion-form-counterservice>
  <ion-grid>
    <ion-row>
      <ion-col>
        <button ion-button full color="danger" class="slide-next" (click)="stepValidation()">รีวิวการสั่งสินค้า</button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-form-paymentoption>
    `,
        styles: [`
  ion-form-payment {
    
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonFormPaymentComponent);
exports.IonFormPaymentComponent = IonFormPaymentComponent;
//# sourceMappingURL=ion-form-payment.js.map
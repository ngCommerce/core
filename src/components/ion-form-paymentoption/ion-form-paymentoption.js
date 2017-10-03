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
let IonFormPaymentOptionComponent = class IonFormPaymentOptionComponent {
    constructor() {
        this.datapayment = new core_1.EventEmitter();
        // console.log('Hello IonFormPaymentComponent Component');
    }
    selectpayment(data) {
        this.datashipping.order.payment = {
            paymenttype: data.name
        };
        this.datapayment.emit(this.datashipping);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormPaymentOptionComponent.prototype, "paymentgateway", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormPaymentOptionComponent.prototype, "datashipping", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormPaymentOptionComponent.prototype, "channel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormPaymentOptionComponent.prototype, "datapayment", void 0);
IonFormPaymentOptionComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-paymentoption',
        template: `
    <ion-grid text-right>
    <ion-row>
      <ion-col>
        <ion-row>
          <ion-col text-center *ngFor="let payment of paymentgateway" (click)="selectpayment(payment)">
            <ion-segment color="light" [(ngModel)]="channel">
              <ion-segment-button [value]="payment.name">
                <ion-preload-image [ratio]="{w:1, h:1}" src="{{payment.img}}"></ion-preload-image>
              </ion-segment-button>
            </ion-segment>
            <p>{{payment.name}}</p>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ng-content></ng-content>
    `,
        styles: [`
  ion-form-paymentoption {
    
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonFormPaymentOptionComponent);
exports.IonFormPaymentOptionComponent = IonFormPaymentOptionComponent;
//# sourceMappingURL=ion-form-paymentoption.js.map
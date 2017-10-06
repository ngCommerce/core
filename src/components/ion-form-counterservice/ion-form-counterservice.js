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
const ion_form_paymentoption_1 = require("./../ion-form-paymentoption/ion-form-paymentoption");
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let IonFormCounterserviceComponent = class IonFormCounterserviceComponent {
    constructor(parent) {
        this.parent = parent;
        // console.log('Hello IonFormPaymentComponent Component');
    }
    selectcounter(data) {
        this.datapayment = this.datapayment ? this.datapayment : {};
        this.datapayment.order.payment.counterservice = data.name;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormCounterserviceComponent.prototype, "paymentgateway", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IonFormCounterserviceComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormCounterserviceComponent.prototype, "datapayment", void 0);
IonFormCounterserviceComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-counterservice',
        template: `
    <ion-item-group *ngIf="parent.channel == value">
    <ion-item-divider color="light"><b>bank</b></ion-item-divider>
</ion-item-group>
<ion-grid text-right *ngIf="parent.channel == value">
    <ion-row>
        <ion-col>
            <ion-row>
                <ion-col text-center *ngFor="let counter of paymentgateway" (click)="selectcounter(counter)">
                    <ion-segment color="light" [(ngModel)]="counteractive">
                        <ion-segment-button id="segmentCounter" [value]="counter.name">
                        <img src="{{counter.image}}">
                        </ion-segment-button>
                    </ion-segment>
                    <p>{{counter.name}}</p>
                </ion-col>
            </ion-row>
        </ion-col>
    </ion-row>
</ion-grid>
<ng-content></ng-content>
    `,
        styles: [`
  ion-form-counterservice {
    
  }`
        ]
    }),
    __metadata("design:paramtypes", [ion_form_paymentoption_1.IonFormPaymentOptionComponent])
], IonFormCounterserviceComponent);
exports.IonFormCounterserviceComponent = IonFormCounterserviceComponent;
//# sourceMappingURL=ion-form-counterservice.js.map
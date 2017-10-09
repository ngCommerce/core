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
let IonFormCreditComponent = class IonFormCreditComponent {
    constructor(parent) {
        this.parent = parent;
        this.datacredit = new core_1.EventEmitter();
        this.data = {};
        // console.log('Hello IonFormPaymentComponent Component');
    }
    formcredit(data) {
        this.datacredit.emit(data);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IonFormCreditComponent.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormCreditComponent.prototype, "datacredit", void 0);
IonFormCreditComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-credit',
        template: `
    <ion-grid padding *ngIf="parent.channel == value">
    <ion-row>
      <ion-col col-12>
        <ion-list>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label floating>หมายเลขบัตรเครดิต</ion-label>
                <ion-input type="text" [(ngModel)]="data.creditno" (ngModelChange)="formcredit(data)"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
  
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label floating>ชื่อบัตรเครดิต</ion-label>
                <ion-input type="text" [(ngModel)]="data.creditname" (ngModelChange)="formcredit(data)"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
  
          <ion-row>
            <ion-col col-6>
              <ion-item>
                <ion-label floating>วันที่บัตรหมดอายุ (MM/YY)</ion-label>
                <ion-input type="text" [(ngModel)]="data.expdate" (ngModelChange)="formcredit(data)"></ion-input>
              </ion-item>
            </ion-col>
            <ion-col col-6>
              <ion-item>
                <ion-label floating>หมายเลขตรวจสอบและยืนยันบัตร</ion-label>
                <ion-input type="text" [(ngModel)]="data.creditcvc" (ngModelChange)="formcredit(data)"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
  
        </ion-list>
      </ion-col>
    </ion-row>
  </ion-grid>
    `,
        styles: [`
  ion-form-credit {
    
  }`
        ]
    }),
    __metadata("design:paramtypes", [ion_form_paymentoption_1.IonFormPaymentOptionComponent])
], IonFormCreditComponent);
exports.IonFormCreditComponent = IonFormCreditComponent;
//# sourceMappingURL=ion-form-credit.js.map
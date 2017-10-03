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
let IonFormCreditComponent = class IonFormCreditComponent {
    constructor() {
        // console.log('Hello IonFormPaymentComponent Component');
    }
};
IonFormCreditComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-credit',
        template: `
    <ion-list>
    
      <ion-item>
        
      </ion-item>
    
    </ion-list>
    
    <div>
      <button ion-button block (click)="onClick(item)">Submit</button>
    </div>
    `,
        styles: [`
  ion-form-credit {
    
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonFormCreditComponent);
exports.IonFormCreditComponent = IonFormCreditComponent;
//# sourceMappingURL=ion-form-credit.js.map
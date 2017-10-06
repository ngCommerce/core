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
let IonOrdersComponent = class IonOrdersComponent {
    constructor() {
        // console.log('Hello IonListProductComponent Component');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonOrdersComponent.prototype, "channel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], IonOrdersComponent.prototype, "steps", void 0);
IonOrdersComponent = __decorate([
    core_1.Component({
        selector: 'ion-orders',
        template: `
  <ion-navbar>
  <ion-grid text-right>
    <ion-row>
      <ion-col *ngFor="let step of steps">
        <ion-row>
          <ion-col text-center>
            <ion-segment mode="ios" color="light" [(ngModel)]="channel">
              <ion-segment-button [value]="step.value">{{step.title}}</ion-segment-button>
            </ion-segment>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-navbar>
<ng-content></ng-content>
    `,
        styles: [`
  ion-orders {
    background-color: red;
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonOrdersComponent);
exports.IonOrdersComponent = IonOrdersComponent;
//# sourceMappingURL=ion-orders.js.map
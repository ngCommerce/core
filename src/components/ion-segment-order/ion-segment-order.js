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
const ion_orders_1 = require("../ion-orders/ion-orders");
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let IonSegmentOrderComponent = class IonSegmentOrderComponent {
    constructor(parent) {
        this.parent = parent;
        this.SelectedOrder = new core_1.EventEmitter();
        // console.log('Hello IonListProductComponent Component');
    }
    getItem(e) {
        this.order = e;
    }
    getOrder() {
        this.SelectedOrder.emit(this.order);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonSegmentOrderComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonSegmentOrderComponent.prototype, "SelectedOrder", void 0);
IonSegmentOrderComponent = __decorate([
    core_1.Component({
        selector: 'ion-segment-order',
        template: `
  <div *ngIf="parent.channel == 1">
  <ion-list-order [items]="items.waiting" [status]="'waiting'" (itemClicked)="getItem($event)" (click)="getOrder()"></ion-list-order>
</div>
<div *ngIf="parent.channel == 2">
  <ion-list-order [items]="items.accept" [status]="'accept'" (itemClicked)="getItem($event)" (click)="getOrder()"></ion-list-order>
</div>
<div *ngIf="parent.channel == 3">
  <ion-list-order [items]="items.sent" [status]="'sent'" (itemClicked)="getItem($event)" (click)="getOrder()"></ion-list-order>
</div>
<div *ngIf="parent.channel == 4">
  <ion-list-order [items]="items.return" [status]="'return'" (itemClicked)="getItem($event)" (click)="getOrder()"></ion-list-order>
</div>
    `,
        styles: [`
  ion-segment-order {
    background-color: red;
  }`
        ]
    }),
    __metadata("design:paramtypes", [ion_orders_1.IonOrdersComponent])
], IonSegmentOrderComponent);
exports.IonSegmentOrderComponent = IonSegmentOrderComponent;
//# sourceMappingURL=ion-segment-order.js.map
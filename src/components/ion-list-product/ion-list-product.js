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
let IonListProductComponent = class IonListProductComponent {
    constructor() {
        // console.log('Hello IonListProductComponent Component');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonListProductComponent.prototype, "items", void 0);
IonListProductComponent = __decorate([
    core_1.Component({
        selector: 'ion-list-product',
        template: `
    <ion-list >
      <ion-item *ngFor="let item of items">
        <ion-thumbnail item-start>
            <img src="{{item.image}}">
        </ion-thumbnail>
        <h2>{{item.name}}</h2>
        <p>{{item.price}}</p>
      </ion-item>
    </ion-list>
    `,
        styles: [`
  ion-list-product {
    background-color: red;
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonListProductComponent);
exports.IonListProductComponent = IonListProductComponent;
//# sourceMappingURL=ion-list-product.js.map
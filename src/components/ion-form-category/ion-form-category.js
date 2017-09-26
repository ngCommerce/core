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
let IonFormCategoryComponent = class IonFormCategoryComponent {
    constructor() {
        this.createcate = new core_1.EventEmitter();
        // console.log('Hello IonListCategoryComponent Component');
    }
    addcate(items) {
        this.createcate.emit(items);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormCategoryComponent.prototype, "createcate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormCategoryComponent.prototype, "items", void 0);
IonFormCategoryComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-category',
        template: `
  <ion-list>
  
    <ion-item>
      <ion-label floating>Name Shop</ion-label>
      <ion-input type="text" [(ngModel)]="items.name"></ion-input>
    </ion-item>
  
  </ion-list>

<div padding>
<button block (click)="addcate(items)">Add</button>
</div>
    `,
        styles: [`
  ion-form-category {
    background-color: red;
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonFormCategoryComponent);
exports.IonFormCategoryComponent = IonFormCategoryComponent;
//# sourceMappingURL=ion-form-category.js.map
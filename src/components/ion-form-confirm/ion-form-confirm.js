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
let IonFormConfirmComponent = class IonFormConfirmComponent {
    constructor() {
        this.itemClicked = new core_1.EventEmitter();
        // console.log('Hello IonFormConfirmComponent Component');
    }
    onClick(item) {
        this.itemClicked.emit(item);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormConfirmComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormConfirmComponent.prototype, "itemClicked", void 0);
IonFormConfirmComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-confirm',
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
  ion-form-confirm {
    
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonFormConfirmComponent);
exports.IonFormConfirmComponent = IonFormConfirmComponent;
//# sourceMappingURL=ion-form-confirm.js.map
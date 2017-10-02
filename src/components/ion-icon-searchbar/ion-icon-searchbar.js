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
 * Generated class for the SearchBarIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let IonIconSearchbarComponent = class IonIconSearchbarComponent {
    constructor() {
        this.returnData = new core_1.EventEmitter();
        // console.log('Hello IonIconSearchbarComponent Component');
    }
    keySearch(e) {
        console.log(e);
        this.returnData.emit(e);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonIconSearchbarComponent.prototype, "returnData", void 0);
IonIconSearchbarComponent = __decorate([
    core_1.Component({
        selector: 'ion-icon-searchbar',
        template: `
  <ion-item>
  <div class="indexIcon">
    <ion-avatar item-left>
      <span class="icon-green-logo"></span>
    </ion-avatar>
  </div>
  <ion-searchbar [(ngModel)]="keys" (ngModelChange)="keySearch(keys)"></ion-searchbar>
    <p></p>
</ion-item>
  `,
        styles: [`
      .item-inner {
        padding-right: 0px; 
        border-bottom: 0px solid #dedede;
      }
      .indexIcon {
        margin-top: -10px !important;
      }
  `]
    }),
    __metadata("design:paramtypes", [])
], IonIconSearchbarComponent);
exports.IonIconSearchbarComponent = IonIconSearchbarComponent;
//# sourceMappingURL=ion-icon-searchbar.js.map
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
let IonListGridComponent = class IonListGridComponent {
    constructor() {
        // console.log('Hello IonFormShopComponent Component');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], IonListGridComponent.prototype, "items", void 0);
IonListGridComponent = __decorate([
    core_1.Component({
        selector: 'ion-list-grid',
        template: `
    <ion-grid>
    <ion-row>
      <ion-col col-6 *ngIf="items && items.length > 0">
        <img src="{{items[0].image}}">
        <p class="p-margin-top-50">{{items[0].name}}</p>
        <p class="p-price-50">{{items[0].price}}</p>        
      </ion-col>
      <ion-col col-6>
        <ion-row>
          <ion-col col-6 *ngIf="items && items.length > 1">
            <img src="{{items[1].image}}">
            <p class="p-margin-top-40">{{items[1].name}}</p>
            <p class="p-price-40">{{items[1].price}}</p>
          </ion-col>
          <ion-col col-6 *ngIf="items && items.length > 2">
            <img src="{{items[2].image}}">
            <p class="p-margin-top-40">{{items[2].name}}</p>
            <p class="p-price-40">{{items[2].price}}</p>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-6 *ngIf="items && items.length > 3">
            <img src="{{items[3].image}}">
            <p class="p-margin-top-40">{{items[3].name}}</p>
            <p class="p-price-40">{{items[3].price}}</p>      
          </ion-col>
          <ion-col col-6 *ngIf="items && items.length > 4">
            <img src="{{items[4].image}}">
            <p class="p-margin-top-40">{{items[4].name}}</p>
            <p class="p-price-40">{{items[4].price}}</p>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-grid>
  
    `,
        styles: [`
    .p-margin-top-50 {
      margin-top: -50px;
    }
    .p-margin-top-40 {
        margin-top: -30px;
        font-size: 12px;
    }   
    `]
    }),
    __metadata("design:paramtypes", [])
], IonListGridComponent);
exports.IonListGridComponent = IonListGridComponent;
//# sourceMappingURL=ion-list-grid.js.map
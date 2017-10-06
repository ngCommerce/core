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
let IonFormProductComponent = class IonFormProductComponent {
    constructor() {
        this.item = {};
        this.itemClicked = new core_1.EventEmitter();
        // console.log('Hello IonListCategoryComponent Component');
    }
    onClick(item) {
        this.itemClicked.emit(item);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormProductComponent.prototype, "categories", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormProductComponent.prototype, "shippings", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormProductComponent.prototype, "shops", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormProductComponent.prototype, "itemClicked", void 0);
IonFormProductComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-product',
        template: `
    <ion-list>
    
      <ion-item>
        <ion-label floating>Name</ion-label>
        <ion-input type="text" [(ngModel)]="item.name"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Detail</ion-label>
        <ion-input type="text" [(ngModel)]="item.detail"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Price</ion-label>
        <ion-input type="number" [(ngModel)]="item.price"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Promotion Price</ion-label>
        <ion-input type="number" [(ngModel)]="item.promotionprice"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Percent of discount</ion-label>
        <ion-input type="number" [(ngModel)]="item.percentofdiscount"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Currency</ion-label>
        <ion-input type="text" [(ngModel)]="item.currency"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Categories</ion-label>
        <ion-select [(ngModel)]="item.categories" multiple="true">
          <ion-option *ngFor="let item of categories" [value]="item">{{item.name}}</ion-option>
        </ion-select>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Shippings</ion-label>
        <ion-select [(ngModel)]="item.shippings" multiple="true">
          <ion-option *ngFor="let item of shippings" [value]="item">{{item.name}}</ion-option>
        </ion-select>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Shop</ion-label>
        <ion-select [(ngModel)]="item.shop">
          <ion-option *ngFor="let item of shops" [value]="item">{{item.name}}</ion-option>
        </ion-select>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Image</ion-label>
        <ion-input type="text" [(ngModel)]="item.image"></ion-input>
      </ion-item>
    
    </ion-list>
    
    <div padding>
      <button ion-button block (click)="onClick(item)">Submit</button>
    </div>
    
    `,
        styles: [`
  ion-form-product {
    background-color: red;
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonFormProductComponent);
exports.IonFormProductComponent = IonFormProductComponent;
//# sourceMappingURL=ion-form-product.js.map
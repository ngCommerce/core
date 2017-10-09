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
let IonListCartComponent = class IonListCartComponent {
    constructor() {
        this.returnItems = new core_1.EventEmitter();
    }
    removeItem(index) {
        this.items.splice(index, 1);
        this.returnItems.emit(this.items);
    }
    decrease(item) {
        item.qty--;
        this.returnItems.emit(this.items);
    }
    increase(item) {
        item.qty++;
        this.returnItems.emit(this.items);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], IonListCartComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonListCartComponent.prototype, "returnItems", void 0);
IonListCartComponent = __decorate([
    core_1.Component({
        selector: 'ion-list-cart',
        template: `
    <ion-list>
    <ion-item *ngFor="let item of items; let i = index">
      <ion-thumbnail item-start>
        <img [src]="item.product.images[0]">
      </ion-thumbnail>
      <h2>{{ item.product.name }}</h2>
      <p *ngIf="!item.product.promotionprice">{{ item.product.price }} {{ item.product.currency }}</p>
      <p *ngIf="item.product.promotionprice"><span class="price-red"> {{ item.product.promotionprice }} </span><span class="price-gray text-decoration"> {{ item.product.price }} </span> {{ item.product.currency }} </p>
      <ion-grid>
        <ion-row>
          <ion-col col-6 id="cartTrash">
            <ion-icon name="trash" (click)="removeItem(i)"></ion-icon>
          </ion-col>
          <ion-col col-6>
            <button ion-button icon-only small id="cartDecrease" (click)="decrease(item)">
              <ion-icon name="remove"></ion-icon>
            </button>
            <label class="count">{{ item.qty }}</label>
            <button ion-button icon-only small  id="cartIncrease"  (click)="increase(item)">
              <ion-icon name="add"></ion-icon>
            </button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
  </ion-list>
  `,
        styles: [`
  
  `]
    }),
    __metadata("design:paramtypes", [])
], IonListCartComponent);
exports.IonListCartComponent = IonListCartComponent;
//# sourceMappingURL=ion-list-cart.js.map
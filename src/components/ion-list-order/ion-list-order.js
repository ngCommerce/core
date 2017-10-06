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
let IonListOrderComponent = class IonListOrderComponent {
    constructor() {
        this.itemClicked = new core_1.EventEmitter();
        this.data = {};
        this.user = {
            shop: {
                _id: ''
            }
        };
        // console.log('Hello IonListProductComponent Component');
    }
    selectOrder(item) {
        this.data = item;
        // this.navCtrl.push(OrderDetailPage);
        this.itemClicked.emit(this.data);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonListOrderComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IonListOrderComponent.prototype, "status", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonListOrderComponent.prototype, "itemClicked", void 0);
IonListOrderComponent = __decorate([
    core_1.Component({
        selector: 'ion-list-order',
        template: `
  <div *ngIf="items">
  <div>
    <div *ngFor="let item of items; let i = index">
      <ion-list (click)="selectOrder(item)">
        <ion-item>
          <ion-row>
            <ion-col no-padding width-33 class="magin-right-10-custom">
              <img src="{{item.image}}">
            </ion-col>
            <ion-col *ngIf="item.status === status">
              <p id="pName">{{item.name}}</p>
              <p id="pQty">{{item.qty}} qty</p>
              <p id="pPrice">{{item.price | number}} Baht</p>
              <p text-right id="pStatus" >{{item.status}}</p>
            </ion-col>
          </ion-row>
        </ion-item>
      </ion-list>
    </div>
  </div>
</div>
    `,
        styles: [`
  ion-list-order {
    background-color: red;
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonListOrderComponent);
exports.IonListOrderComponent = IonListOrderComponent;
//# sourceMappingURL=ion-list-order.js.map
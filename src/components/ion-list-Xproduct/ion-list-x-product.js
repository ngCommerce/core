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
let IonListXProductComponent = class IonListXProductComponent {
    constructor() {
        // console.log('Hello IonListShopComponent Component');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonListXProductComponent.prototype, "items", void 0);
IonListXProductComponent = __decorate([
    core_1.Component({
        selector: 'ion-list-x-product',
        template: `
  <ion-scroll scrollX="true" class="horizontal-categories">
  <ion-row>
    <ion-col >
      
    </ion-col>
  </ion-row>
  <ion-row class="categories-row">
    <ion-col col-3 class="horizontal-item" *ngFor="let popular of items" 
      (click) = "_selectedItem(popular)">
      <ion-preload-image [ratio]="{w:1, h:1}" [src]="popular.image" title="popular.image"></ion-preload-image>
      <div class="product-box">
          <p class="txt-centr">{{popular.name}}</p>
          <p class="txt-centr2">{{popular.price | number}}</p>
      </div>
    </ion-col>
  </ion-row>
</ion-scroll>
    `,
        styles: [`
  .scroll-content{
    heigth:100px !important;
  }
  .horizontal-categories {
    border-bottom: 10px solid darken(#FFFFFF, 3%) !important;
    padding-bottom: 16px !important;
    .scroll-content {
        position: relative !important;
        contain: style layout !important;
    }
    .categories-row {
        flex-wrap: nowrap !important;
        &::after {
            content: '' !important;
            flex: 0 0 10px !important;
            max-width: 10px !important;
        }
    }
    preload-image {
        img {
            z-index: -3 !important;
        }
    }
    .horizontal-item {
        padding: 0px 0px 0px 10px !important;
        .product-box {
            background-color: rgba(lighten(rgba(#000000, .8), 40%), .6) !important;
            margin-top: -50px !important;
            color: #FFFFFF !important;
            .txt-centr {
                text-align: center !important;
                white-space: nowrap !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
            }
            .txt-centr2 {
                text-align: center !important;
                margin-top: -10px !important;
            }
        }
    }
  }
  `]
    }),
    __metadata("design:paramtypes", [])
], IonListXProductComponent);
exports.IonListXProductComponent = IonListXProductComponent;
//# sourceMappingURL=ion-list-x-product.js.map
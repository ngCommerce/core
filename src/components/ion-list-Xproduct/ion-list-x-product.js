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
      <ion-col width-30 class="horizontal-item" *ngFor="let popular of items" 
        (click) = "_selectedItem(popular)">
        <img src="{{popular.image}}"/>
        <div class="product-box">
            <p class="txt-centr">{{popular.name}}</p>
            <p class="txt-centr2">{{popular.price | number}}</p>
        </div>
      </ion-col>
    </ion-row>
  </ion-scroll>
    `,
        styles: [`
    ion-list-x-product {
    $categories-horizontal-list-padding: 10px;
    
    .horizontal-categories
    {
        border-bottom: 10px solid $white-a;
        @include element-shadow();
        padding-bottom: 16px;

        .scroll-content
        {
            position: relative;
            contain: style layout;
        }

        .categories-row
        {
            @include flex-wrap(nowrap);

            &::after{
                content: '';
                flex: 0 0 $categories-horizontal-list-padding;
            max-width: $categories-horizontal-list-padding;
            }
        }
        preload-image {
            img {
                z-index: -3;
            }
        }
        .horizontal-item
        {
            padding: 0px 0px 0px $categories-horizontal-list-padding;
            .product-box{
                background-color: rgba($black-c, .6);
                margin-top: -50px;
                color: $white;
                .txt-centr {
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis; // width: 100% !important;
                }
                .txt-centr2 {     
                    text-align: center;
                    margin-top: -10px;
                }
            }
        }
    }
  }`
        ]
    }),
    __metadata("design:paramtypes", [])
], IonListXProductComponent);
exports.IonListXProductComponent = IonListXProductComponent;
//# sourceMappingURL=ion-list-x-product.js.map
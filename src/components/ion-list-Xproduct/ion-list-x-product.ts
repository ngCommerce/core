import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
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
  $categories-horizontal-list-padding: 10px;
  $white: #FFFFFF;
  $white-a: darken($white, 3%);
  $black: rgba(#000000, .8);
  $black-c: lighten($black, 40%);
  .horizontal-categories {
      border-bottom: 10px solid $white-a;
      padding-bottom: 16px;
      .scroll-content {
          position: relative;
          contain: style layout;
      }
      .categories-row {
          flex-wrap: nowrap;
          &::after {
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
      .horizontal-item {
          padding: 0px 0px 0px $categories-horizontal-list-padding;
          .product-box {
              background-color: rgba($black-c, .6);
              margin-top: -50px;
              color: $white;
              .txt-centr {
                  text-align: center;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
              }
              .txt-centr2 {
                  text-align: center;
                  margin-top: -10px;
              }
          }
      }
  }
  `]
})
export class IonListXProductComponent {
  @Input() items: any;
  constructor() {
    // console.log('Hello IonListShopComponent Component');
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonBackgroundImageComponent {
    constructor() {
        this.itemClicked = new EventEmitter();
        // console.log('Hello IonFormShopComponent Component');
    }
    selectProduct(item) {
        this.itemClicked.emit(item);
    }
}
IonBackgroundImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-background-image',
                template: `
    <ion-row class="grid-1 grid-image">
    <ion-col width-50 class="grid-item" *ngIf="items && items.length > 0" (click)="selectProduct(items[0])">
      <div class="grid-item-wrapper">
        <div class="grid-item-inner">
          <img class="background-image" src="{{items[0].image}}">
          <h2 class="item-title">{{items[0].name}}</h2>
        </div>
      </div>
    </ion-col>
    <ion-col width-50 class="grid-item" *ngIf="items && items.length > 1" (click)="selectProduct(items[1])">
      <div class="grid-item-wrapper">
        <div class="grid-item-inner">
          <img class="background-image" src="{{items[1].image}}">
          <h2 class="item-title">{{items[1].name}}</h2>
        </div>
      </div>
    </ion-col>
  </ion-row>
  <ion-row class="grid-1 grid-image">
    <ion-col width-50 class="grid-item" *ngIf="items && items.length > 2" (click)="selectProduct(items[2])">
      <div class="grid-item-wrapper">
        <div class="grid-item-inner">
          <img class="background-image" src="{{items[2].image}}">
          <h2 class="item-title">{{items[2].name}}</h2>
        </div>
      </div>
    </ion-col>
    <ion-col width-50 class="grid-item" *ngIf="items && items.length > 3" (click)="selectProduct(items[3])">
      <div class="grid-item-wrapper">
        <div class="grid-item-inner">
          <img class="background-image" src="{{items[3].image}}">
          <h2 class="item-title">{{items[3].name}}</h2>
        </div>
      </div>
    </ion-col>
  </ion-row>
  
    `,
                styles: [`
    ion-background-image{
        
    }   
    `]
            },] },
];
/** @nocollapse */
IonBackgroundImageComponent.ctorParameters = () => [];
IonBackgroundImageComponent.propDecorators = {
    'items': [{ type: Input },],
    'itemClicked': [{ type: Output },],
};
//# sourceMappingURL=ion-background-image.js.map
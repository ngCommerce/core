import { Component, Output, EventEmitter, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormProductComponent {
    constructor() {
        this.item = {};
        this.product = {};
        this.itemClicked = new EventEmitter();
        this.product = this.item;
        console.log(this.product);
        // console.log('Hello IonListCategoryComponent Component');
    }
    onClick(item) {
        if (!item.name) {
            alert('Please Enter Your Name!');
            return;
        }
        else if (!item.detail) {
            alert('Please Enter Your Detail!');
            return;
        }
        else if (!item.price) {
            alert('Please Enter Your Price!');
            return;
        }
        else if (!item.currency) {
            alert('Please Enter Your Currency!');
            return;
        }
        else if (!item.shippings) {
            alert('Please Enter Your Shippings!');
            return;
        }
        else if (!item.categories) {
            alert('Please Enter Your Categories!');
            return;
        }
        else if (!item.shop) {
            alert('Please Enter Your Shop!');
            return;
        }
        else if (!this.item.images && this.item.images.length === 0) {
            alert('Please Enter Your Upload Image!');
            return;
        }
        this.itemClicked.emit(item);
    }
    imageList(e) {
        this.item.images = e;
    }
}
IonFormProductComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-form-product',
                template: `
    <ion-list>
    
      <ion-item>
        <ion-label floating>Name*</ion-label>
        <ion-input type="text" value="{{item.name}}" [(ngModel)]="product.name"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Detail*</ion-label>
        <ion-input type="text"  value="{{item.detail}}" [(ngModel)]="product.detail"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Price*</ion-label>
        <ion-input type="number"  value="{{item.price}}" [(ngModel)]="product.price"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Promotion Price</ion-label>
        <ion-input type="number"  value="{{item.promotionprice}}" [(ngModel)]="product.promotionprice"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Percent of discount</ion-label>
        <ion-input type="number"  value="{{item.percentofdiscount}}" [(ngModel)]="product.percentofdiscount"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Currency*</ion-label>
        <ion-input type="text"   value="{{item.currency}}" [(ngModel)]="product.currency"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Categories*</ion-label>
        <ion-select  [(ngModel)]="product.categories" multiple="true">
          <ion-option *ngFor="let item of categories" [value]="item">{{item.name}}</ion-option>
        </ion-select>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Shippings*</ion-label>
        <ion-select  [(ngModel)]="product.shippings" multiple="true">
          <ion-option *ngFor="let item of shippings" [value]="item">{{item.name}}</ion-option>
        </ion-select>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Shop*</ion-label>
        <ion-select [(ngModel)]="product.shop">
          <ion-option *ngFor="let item of shops" [value]="item">{{item.name}}</ion-option>
        </ion-select>
      </ion-item>

      <p id="productImg">Images*</p>
      <ion-upload-image [maxImage]="5" (imageOutList)="imageList($event)"></ion-upload-image>
      
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
            },] },
];
/** @nocollapse */
IonFormProductComponent.ctorParameters = () => [];
IonFormProductComponent.propDecorators = {
    'item': [{ type: Input },],
    'categories': [{ type: Input },],
    'shippings': [{ type: Input },],
    'shops': [{ type: Input },],
    'itemClicked': [{ type: Output },],
};
//# sourceMappingURL=ion-form-product.js.map
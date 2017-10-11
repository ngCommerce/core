import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProductModel } from '../../index';
import { IonUploadImageComponent } from "./../ion-upload-image/ion-upload-image";

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-product',
  template: `
    <ion-list>
    
      <ion-item>
        <ion-label floating>Name*</ion-label>
        <ion-input type="text" [(ngModel)]="productBind.name"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Detail*</ion-label>
        <ion-input type="text" [(ngModel)]="item.detail"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Price*</ion-label>
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
        <ion-label floating>Currency*</ion-label>
        <ion-input type="text" [(ngModel)]="item.currency"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Categories*</ion-label>
        <ion-select [(ngModel)]="item.categories" multiple="true">
          <ion-option *ngFor="let items of categories" [value]="items">{{items.name}}</ion-option>
        </ion-select>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Shippings*</ion-label>
        <ion-select [(ngModel)]="item.shippings" multiple="true">
          <ion-option *ngFor="let items of shippings" [value]="items" >{{items.name}}</ion-option>
        </ion-select>
      </ion-item>
      <ion-item *ngIf="shops && shops.length > 0">
        <ion-label floating>Shop*</ion-label>
        <ion-select [(ngModel)]="productBind.shop">
          <ion-option *ngFor="let items of shops" [value]="items">{{items.name}}</ion-option>
          </ion-select>
      </ion-item>

      <p id="productImg">Images*</p>
      <ion-upload-image [maxImage]="5" (imageOutList)="imageList($event)"></ion-upload-image>
      
    </ion-list>
    
    <div padding>
      <button ion-button block (click)="onClick(productBind)">Submit</button>
    </div>
    
    `,
  styles: [`
  ion-form-product {
    background-color: red;
  }`
  ]
})
export class IonFormProductComponent {
  @Input() productBind = {} as ProductModel;
  @Input() item = {} as ProductModel;
  @Input() categories: any;
  @Input() shippings: any;
  @Input() shops: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    // console.log('Hello IonListCategoryComponent Component');
    // this.item.shop = this.shops[0];
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    setTimeout(function () {
      console.log('productBind');
      console.log(this.productBind);
    }, 3000);
  }

  checkedShop() {
    return true;
  }

  onClick(item) {
    console.log(this.productBind);

    if (!item.name) {
      alert('Please Enter Your Name!');
      return;
    } else if (!item.detail) {
      alert('Please Enter Your Detail!');
      return;
    } else if (!item.price) {
      alert('Please Enter Your Price!');
      return;
    } else if (!item.currency) {
      alert('Please Enter Your Currency!');
      return;
    } else if (!item.shippings) {
      alert('Please Enter Your Shippings!');
      return;
    } else if (!item.categories) {
      alert('Please Enter Your Categories!');
      return;
    } else if (!item.shop) {
      alert('Please Enter Your Shop!');
      return;
    } else if (!this.item.images && this.item.images.length === 0) {
      alert('Please Enter Your Upload Image!');
      return;
    }

    // this.itemClicked.emit(item);
  }
  imageList(e) {
    this.item.images = e;
  }
}

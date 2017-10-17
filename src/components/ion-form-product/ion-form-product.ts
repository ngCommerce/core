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
        <ion-input type="text" [(ngModel)]="item.name"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Detail*</ion-label>
        <ion-input type="text" [(ngModel)]="item.detail"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Price*</ion-label>
        <ion-input type="number" [(ngModel)]="item.price" (ngModelChange)="discountprice()"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Promotion Price</ion-label>
        <ion-input type="number" [(ngModel)]="item.promotionprice" (ngModelChange)="discountpromotion()"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Percent of discount</ion-label>
        <ion-input type="number" [(ngModel)]="item.percentofdiscount" (ngModelChange)="discountpercent()"></ion-input>
      </ion-item>
    

    <ion-item *ngIf="!item.currency">
    <ion-label floating>Currency*</ion-label>
    <ion-select [(ngModel)]="item.currency">
      <ion-option *ngFor="let items of currency" [value]="items.name">{{items.name}}</ion-option>
      </ion-select>
  </ion-item>

  <ion-item *ngIf="item.currency">
  <ion-label floating>Currency*</ion-label>
  <ion-select [(ngModel)]="item.currency">
    <ion-option *ngFor="let items of currency" [value]="items.name">{{items.name}}</ion-option>
    </ion-select>
</ion-item>

      <ion-item>
        <ion-label floating>Categories*</ion-label>
        <ion-select [(ngModel)]="item.categories" multiple="true">
          <ion-option *ngFor="let items of categories" [value]="items._id">{{items.name}}</ion-option>
        </ion-select>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Shippings*</ion-label>
        <ion-select [(ngModel)]="item.shippings" multiple="true">
          <ion-option *ngFor="let items of shippings" [value]="items._id">{{items.name}}</ion-option>
        </ion-select>
      </ion-item>
      
      <ion-item *ngIf="!item.shop">
        <ion-label floating>Shop*</ion-label>
        <ion-select [(ngModel)]="item.shop">
          <ion-option *ngFor="let items of shops" [value]="items._id">{{items.name}}</ion-option>
          </ion-select>
      </ion-item>

      <ion-item *ngIf="item.shop">
      <ion-label floating>Shop*</ion-label>
      <ion-select [(ngModel)]="item.shop">
        <ion-option *ngFor="let items of shops" [value]="items._id">{{items.name}}</ion-option>
        </ion-select>
    </ion-item>
    <ion-item *ngIf="chkformimg">
    <p id="productImg">Images*</p>
    <ion-upload-image [maxImage]="5" (imageOutList)="imageList($event)"></ion-upload-image>
    </ion-item>

    </ion-list>
    
    <div padding>
    <ion-row>
      <ion-col width-50>
        <button ion-button block (click)="onClick(item)">Submit</button>
      </ion-col>
      <ion-col width-50>
        <button ion-button block color="danger" (click)="canceldissmis()">Cancel</button>
      </ion-col>
    </ion-row>
    </div>
    
    `,
  styles: [`
  ion-form-product {
    background-color: red;
  }`
  ]
})
export class IonFormProductComponent {
  @Input() item = {} as ProductModel;
  @Input() categories: any;
  @Input() shippings: any;
  @Input() shops: any;
  @Input() chkformimg: boolean;
  @Input() currency: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    // console.log('Hello IonListCategoryComponent Component');
    // this.item.shop = this.shops[0];
    // console.log(this.item);
    this.item.price = 0;
    this.item.promotionprice = 0;
    this.item.percentofdiscount = 0;
  }

  checkedShop() {
    return true;
  }

  onClick(item) {

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

    this.itemClicked.emit(item);
  }
  imageList(e) {
    this.item.images = e;
  }

  discountpromotion() {
    if (this.item.price > 0) {
      if (this.item.promotionprice > 0) {
        if (this.item.price - this.item.promotionprice >= 0) {
          let per = (this.item.promotionprice / this.item.price) * 100;
          this.item.percentofdiscount = 100 - per;
        } else {
          alert('ส่วนลดมากกว่าราคาขายจริง');
          this.item.percentofdiscount = null;
          this.item.promotionprice = null;
        }
      } else {
        this.item.promotionprice = null;
        this.item.percentofdiscount = null;
      }
    } else {
      this.item.promotionprice = null;
      this.item.percentofdiscount = null;
    }

  }
  discountpercent() {
    if (this.item.price > 0) {
      if (this.item.percentofdiscount > 0) {
        if (this.item.percentofdiscount <= 100) {
          let pro = (this.item.percentofdiscount * this.item.price) / 100;
          this.item.promotionprice = this.item.price - pro;
        } else {
          alert('มากกว่า 100 เปอร์เซ็นต์');
          this.item.promotionprice = null;
          this.item.percentofdiscount = null;
        }
      } else {
        this.item.promotionprice = null;
        this.item.percentofdiscount = null;
      }
    } else {
      this.item.promotionprice = null;
      this.item.percentofdiscount = null;
    }
  }

  canceldissmis() {
    this.cancelCreate.emit('cancelCreate');
  }

  discountprice() {
    this.item.promotionprice = null;
    this.item.percentofdiscount = null;
  }

}

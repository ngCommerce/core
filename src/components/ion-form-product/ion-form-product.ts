import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProductModel } from '../../index';

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
    
      <ion-upload-image (imageOutList)="imageList($event)"></ion-upload-image>
      
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
})
export class IonFormProductComponent {
  item = {} as ProductModel;
  @Input() categories: any;
  @Input() shippings: any;
  @Input() shops: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    // console.log('Hello IonListCategoryComponent Component');
  }
  onClick(item) {
    this.itemClicked.emit(item);
  }
  imageList(e) {
    this.item.images = e;
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonDetailShopComponent {
    constructor() {
        this.review = new EventEmitter();
        this.selecItem = new EventEmitter();
        this.selectedItem = new EventEmitter();
        this.groups = [
            {
                name: '5',
                percent: '0%',
                sum: 0
            },
            {
                name: '4',
                percent: '0%',
                sum: 0
            },
            {
                name: '3',
                percent: '0%',
                sum: 0
            },
            {
                name: '2',
                percent: '0%',
                sum: 0
            },
            {
                name: '1',
                percent: '0%',
                sum: 0
            }
        ];
    }
    createReview() {
        this.review.emit('createReview');
    }
    gotoShopDetail(e) {
        this.selecItem.emit(e);
    }
    selected(e) {
        this.selectedItem.emit(e);
    }
}
IonDetailShopComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-detail-shop',
                template: `
    <img src="{{item.image}}">
    <ion-row wrap id="wrap">
    <ion-col no-padding width-60 id="colName">
      <h2 id="h2Name">{{item.name}}</h2>
    </ion-col>
    <ion-col no-padding width-40 id="colRating">
      <rating [(ngModel)]="item.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
        starIconName="star" nullable="false"></rating>
    </ion-col>
  </ion-row>
  <ion-row id="detail">
  <ion-col no-padding width-60 id="colDetail">
  <p id="pDetail">
    {{item.detail}}
  </p>
</ion-col>
  </ion-row>
  <ion-row *ngIf="false">
    <ion-col id="divBtn">
      <button ion-button block primary id="btnCall">
        <ion-icon name="call"></ion-icon>
      </button>
      </ion-col>
      <ion-col>
      <button ion-button block primary id="btnMail">
        <ion-icon name="mail"></ion-icon>
      </button>
      </ion-col>   
  </ion-row>  
    <div *ngIf="item.map && item.map.lat && item.map.long" id="divMap">
      <img src="https://maps.googleapis.com/maps/api/staticmap?center={{item.map.lat}},{{item.map.lng}}&zoom=15&size=400x300&scale=2&markers=icon:https://s3-us-west-2.amazonaws.com/ionicthemes-apps-assets/ion2FullApp/pin.min.png|{{item.map.lat}},{{item.map.long}}"
        alt="location map" title="shop name - shop detail">
    </div>
    <ion-list id="listTel">
      <ion-item *ngIf="item.tel" id="itemTel">
        <ion-avatar item-left>
          <ion-icon name="call"></ion-icon>
        </ion-avatar>
        <span>{{item.tel}}</span>
      </ion-item>
      <ion-item *ngIf="item.email" id="itemMail">
        <ion-avatar item-left >
          <ion-icon name="mail"></ion-icon>
        </ion-avatar>
        <span>{{item.email}}</span>
      </ion-item>
    </ion-list>

    <ion-row *ngIf="item.products">
    <ion-col text-left id="colShop">
        สินค้าในร้าน : 
    </ion-col>
</ion-row>
<ion-list>
<ion-list-scoll-x [populars]="item.products" (selectedItem)="selected($event)"></ion-list-scoll-x>
<ion-grid *ngIf="item">
    <ion-row *ngIf="isReview" id="rowIsreview">
        <ion-col id="colBtnReview">
            <button ion-button block outline (click)="createReview()" id="btnCeateReview">Write Review</button>
        </ion-col>
    </ion-row>
    </ion-grid>
<hr *ngIf="item">
<ion-list *ngIf="item && item.reviews && item.reviews.length >0">
<ion-item-divider *ngFor="let review of item.reviews">
    <p>
        <ion-row >
            <ion-col no-padding width-60 text-left>
                <p>{{review.topic}}</p>
            </ion-col>
            <ion-col width-40 text-right>
                <p>{{review.created | moment}}</p>
                <p>{{review.user ? review.user.displayname : ''}}</p>
            </ion-col>
        </ion-row>
    </p>
    <p id="pRate">
        <rating [(ngModel)]="review.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
            starIconName="star" nullable="false"></rating>
    </p>
    <p>{{review.comment}}</p>
    <p></p>
</ion-item-divider>
</ion-list>

    `,
                styles: [`
  ion-detail-shop {
      
  }`
                ]
            },] },
];
/** @nocollapse */
IonDetailShopComponent.ctorParameters = () => [];
IonDetailShopComponent.propDecorators = {
    'item': [{ type: Input },],
    'isReview': [{ type: Input },],
    'review': [{ type: Output },],
    'selecItem': [{ type: Output },],
    'selectedItem': [{ type: Output },],
};
//# sourceMappingURL=ion-detail-shop.js.map
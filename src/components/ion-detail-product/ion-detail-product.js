import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonDetailProductComponent {
    constructor() {
        this.selectedFavorite = new EventEmitter();
        this.review = new EventEmitter();
        // console.log('Hello IonListCategoryComponent Component');
    }
    favorite(item) {
        this.selectedFavorite.emit(item);
    }
    createReview() {
        this.review.emit('createReview');
    }
}
IonDetailProductComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-detail-product',
                template: `
  <ion-slides pager="true" *ngIf="item.images && item.images.length > 0">
  <ion-slide *ngFor="let image of item.images">
    <img src="{{image}}">
  </ion-slide>
</ion-slides>
<ion-grid id="gridDetail">
    <ion-row>
        <ion-col id="colProduct">
            <p>{{item.name}}</p>
            <p>{{item.detail}}</p>
            <p *ngIf="item.promotionprice">
                <span>{{item.promotionprice}} {{item.currency}}</span>
                <span>{{item.price}} {{item.currency}}</span>
                <span>-{{item.percentofdiscount}} %</span>
            </p>
            <h4 *ngIf="!item.promotionprice">{{item.price}} {{item.currency}}</h4>

        </ion-col>
    </ion-row>
    <ion-row *ngIf="item.rate">
        <ion-col width-50 id="colRate">
            <rating [(ngModel)]="item.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
                starIconName="star" nullable="false"></rating>
        </ion-col>
        <ion-col width-50 text-right id="colBtn">
            <button ion-button color="danger" clear icon-only>
                <ion-icon name='ios-share-outline' is-active="false"></ion-icon>
            </button>
            <button ion-button color="danger" clear icon-only (click)="favorite(item)">
                    <ion-icon name='ios-heart-outline' is-active="false" ></ion-icon>
            </button>
        </ion-col>
    </ion-row>
</ion-grid>
<ion-row  *ngIf="item.shippings && item.shippings.length > 0">
    <ion-col text-left id="colShipping">
        วิธีการจัดส่ง
    </ion-col>
</ion-row>
<ion-list *ngIf="item.shippings && item.shippings.length > 0">
    <ion-item-divider *ngFor="let shipping of item.shippings">
        <ion-icon item-start name="ios-archive-outline"></ion-icon> {{shipping.name}}
    </ion-item-divider>
    <ion-item-divider *ngIf="item.cod">
        <ion-icon item-start name="ios-cash-outline"></ion-icon> สามารถชำระเงินปลายทางได้
    </ion-item-divider>
</ion-list>
<ion-row *ngIf="item.shop">
    <ion-col text-left id="colShop">
        จัดจำหน่ายโดย : 
    </ion-col>
</ion-row>
<ion-grid *ngIf="item.shop" id="gridShop">
    <ion-row>
        <ion-col>
            <span >{{item.shop.name}}</span>
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col text-left>
            <rating [(ngModel)]="item.shop.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
                starIconName="star" nullable="false"></rating>
        </ion-col>
    </ion-row>
</ion-grid>

<ion-grid *ngIf="item">
<ion-row>
    <ion-col width-50>
        <ion-row>
            <ion-col>
                <rating [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
                    starIconName="star" nullable="false"></rating>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <span> {{item.rate}} </span> <span>From 5</span>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <span>{{item && item.reviews && item.reviews.length > 0 ? item.reviews.length : 0}} รีวิว</span>
            </ion-col>
        </ion-row>
    </ion-col>
    <ion-col width-50 class="progress-box">
        <p *ngFor="let group of groups">
            <ion-row>
                <ion-col width-30>
                    <span>{{group.name}}Star</span>
                </ion-col>
                <ion-col width-60 class="progress-bar">
                    <span [style.width]="group.percent"></span>
                </ion-col>
                <ion-col width-10>
                    <span>{{group.sum}}</span>
                </ion-col>
            </ion-row>
        </p>
    </ion-col>
</ion-row>
<ion-row *ngIf="isReview">
    <ion-col>
        <button ion-button block outline (click)="createReview()">Write Review</button>
    </ion-col>
</ion-row>
</ion-grid>
<hr *ngIf="item">
<ion-list *ngIf="item && item.reviews && item.reviews.length >0">
<ion-item-divider *ngFor="let review of item.reviews">
    <p>
        <ion-row>
            <ion-col no-padding width-60 text-left>
                <p>{{review.topic}}</p>
            </ion-col>
            <ion-col width-40 text-right>
                <p>{{review.created}}</p>
                <p>{{review.user ? review.user.displayname : ''}}</p>
            </ion-col>
        </ion-row>
    </p>
    <p>
        <rating [(ngModel)]="review.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
            starIconName="star" nullable="false"></rating>
    </p>
    <p>{{review.comment}}</p>
    <p></p>
</ion-item-divider>
</ion-list>



    `,
                styles: [`
  ion-detail-product {
 
  }`
                ]
            },] },
];
/** @nocollapse */
IonDetailProductComponent.ctorParameters = () => [];
IonDetailProductComponent.propDecorators = {
    'item': [{ type: Input },],
    'isReview': [{ type: Input },],
    'selectedFavorite': [{ type: Output },],
    'review': [{ type: Output },],
};
//# sourceMappingURL=ion-detail-product.js.map
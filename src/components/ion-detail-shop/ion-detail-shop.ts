import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-detail-shop',
    template: `
    <img src="{{item.image}}">
    <ion-row wrap id="wrap">
    <ion-col no-padding width-65 id="colName">
      <h2 id="h2Name">{{item.name}}</h2>
    </ion-col>
  
    <ion-col no-padding width-60 id="colDetail">
      <p id="pDetail">
        {{item.detail}}
      </p>
    </ion-col>
    <ion-col no-padding width-40 id="colRating">
      <rating [(ngModel)]="item.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
        starIconName="star" nullable="false"></rating>
    </ion-col>
  </ion-row>
    <div id="divBtn">
      <button ion-button primary id="btnCall">
        <ion-icon name="call"></ion-icon>
      </button>
      <button ion-button primary id="btnMail">
        <ion-icon name="mail"></ion-icon>
      </button>
    </div>
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
      <ion-item *ngIf="item.email">
        <ion-avatar item-left id="itemMail">
          <ion-icon name="mail"></ion-icon>
        </ion-avatar>
        <span>{{item.email}}</span>
      </ion-item>
    </ion-list>
    <ion-list>
    <ion-row>
    <ion-col id="colRate">
        <span id="spanRate"> {{item.rate}} </span> <span>From 5</span>
    </ion-col>
</ion-row>
<ion-row>
    <ion-col id="colReviews">
        <span id="spanItemReview">{{item && item.reviews && item.reviews.length > 0 ? item.reviews.length : 0}} รีวิว</span>
    </ion-col>
</ion-row>
    <ion-grid *ngIf="item">
    <ion-row>
        <ion-col width-50>
            <ion-row>
                <ion-col id="colRating">
                    <rating [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"
                        starIconName="star" nullable="false" id="ratingRate"></rating>
                </ion-col>
            </ion-row>
        </ion-col>
        
    </ion-row>
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
  ion-detail-shop {
      
  }`
    ]
})
export class IonDetailShopComponent {
    @Input() item: any;
    @Input() isReview: Boolean;
    @Output() review: EventEmitter<any> = new EventEmitter<any>();
    groups: Array<any> = [
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
    constructor() {
    }
    createReview() {
        this.review.emit('createReview');
    }

}

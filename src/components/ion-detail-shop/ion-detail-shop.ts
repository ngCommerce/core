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
    <div>
      <button ion-button primary>
        <ion-icon name="call"></ion-icon>
      </button>
      <button ion-button primary>
        <ion-icon name="mail"></ion-icon>
      </button>
    </div>
    <div *ngIf="item.map && item.map.lat && item.map.long">
      <img src="https://maps.googleapis.com/maps/api/staticmap?center={{item.map.lat}},{{item.map.lng}}&zoom=15&size=400x300&scale=2&markers=icon:https://s3-us-west-2.amazonaws.com/ionicthemes-apps-assets/ion2FullApp/pin.min.png|{{item.map.lat}},{{item.map.long}}"
        alt="location map" title="shop name - shop detail">
    </div>
    <ion-list>
      <ion-item *ngIf="item.tel">
        <ion-avatar item-left>
          <ion-icon name="call"></ion-icon>
        </ion-avatar>
        <span>{{item.tel}}</span>
      </ion-item>
      <ion-item *ngIf="item.email">
        <ion-avatar item-left>
          <ion-icon name="mail"></ion-icon>
        </ion-avatar>
        <span>{{item.email}}</span>
      </ion-item>
    </ion-list>
    <ion-list>
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
    <ion-row *ngIf="isReview">
    <ion-col>
        <button ion-button block outline (click)="createReview()">Write Review</button>
    </ion-col>
</ion-row>
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

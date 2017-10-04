import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-review',
    template: `
    <form (ngSubmit)="addReview()">
    <ion-item>
      <ion-label>Topic</ion-label>
      <ion-input type="text" [(ngModel)]="reviewData.topic" name="Topic"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Comment</ion-label>
      <ion-textarea [(ngModel)]="reviewData.comment" name="Comment"></ion-textarea>
    </ion-item>
     <rating [(ngModel)]="reviewData.rate" name="Rate" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"
      nullable="false"></rating> 
    <button ion-button full type="submit"  (click)="writereview(reviewData)">Write Review</button>
  </form>
    `,
    styles: [`
    ion-form-review {
    background-color: red;
  }`
    ]
})
export class IonFormReviewComponent {
    // @Input() item: any;
    @Output() selectedReview: EventEmitter<any> = new EventEmitter<any>();
    reviewData = {
        topic: '',
        comment: '',
        rate: ''

    }
    constructor() {
        // console.log('Hello IonListCategoryComponent Component');
    }
    writereview(reviewData) {
        this.selectedReview.emit(reviewData);
    }
}

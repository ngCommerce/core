import { Component, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormReviewComponent {
    constructor() {
        // @Input() item: any;
        this.selectedReview = new EventEmitter();
        this.reviewData = {
            topic: '',
            comment: '',
            rate: ''
        };
        // console.log('Hello IonListCategoryComponent Component');
    }
    writereview(reviewData) {
        this.selectedReview.emit(reviewData);
    }
}
IonFormReviewComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
/** @nocollapse */
IonFormReviewComponent.ctorParameters = () => [];
IonFormReviewComponent.propDecorators = {
    'selectedReview': [{ type: Output },],
};
//# sourceMappingURL=ion-form-review.js.map
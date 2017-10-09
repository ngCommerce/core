"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let IonFormReviewComponent = class IonFormReviewComponent {
    constructor() {
        // @Input() item: any;
        this.selectedReview = new core_1.EventEmitter();
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
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormReviewComponent.prototype, "selectedReview", void 0);
IonFormReviewComponent = __decorate([
    core_1.Component({
        selector: 'ion-form-review',
        template: `
    <form>
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
    }),
    __metadata("design:paramtypes", [])
], IonFormReviewComponent);
exports.IonFormReviewComponent = IonFormReviewComponent;
//# sourceMappingURL=ion-form-review.js.map
import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormReviewComponent {
    selectedReview: EventEmitter<any>;
    reviewData: {
        topic: string;
        comment: string;
        rate: string;
    };
    constructor();
    writereview(reviewData: any): void;
}

import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonDetailProductComponent {
    item: any;
    isReview: Boolean;
    selectedFavorite: EventEmitter<any>;
    review: EventEmitter<any>;
    constructor();
    favorite(item: any): void;
    createReview(): void;
}

import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonDetailShopComponent {
    item: any;
    isReview: Boolean;
    review: EventEmitter<any>;
    selecItem: EventEmitter<any>;
    selectedItem: EventEmitter<any>;
    groups: Array<any>;
    constructor();
    createReview(): void;
    gotoShopDetail(e: any): void;
    selected(e: any): void;
}

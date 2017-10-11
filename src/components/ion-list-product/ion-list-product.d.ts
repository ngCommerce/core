import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonListProductComponent {
    posts: any;
    items: any;
    showSearch: Boolean;
    selectedProduct: EventEmitter<any>;
    constructor();
    add(item: any): void;
    getItems(e: any): void;
}

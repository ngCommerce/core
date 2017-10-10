import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonListProductComponent {
    items: any;
    selectedProduct: EventEmitter<any>;
    delete: EventEmitter<any>;
    constructor();
    add(item: any): void;
    deleteProduct(item: any): void;
}

import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormShippingComponent {
    listaddress: Array<any>;
    listshipping: any;
    gotoNext: EventEmitter<any>;
    createAddress: EventEmitter<any>;
    address: {};
    data: any;
    constructor();
    selectaddress(data: any): void;
    openModal(): void;
    setproduct(product: any, shipping: any): void;
    stepValidation(): void;
}

import { EventEmitter } from '@angular/core';
import { ProductModel } from '../../index';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormProductComponent {
    item: ProductModel;
    categories: any;
    shippings: any;
    shops: any;
    chkformimg: boolean;
    currency: any;
    itemClicked: EventEmitter<any>;
    cancelCreate: EventEmitter<any>;
    constructor();
    checkedShop(): boolean;
    onClick(item: any): void;
    imageList(e: any): void;
    toFixedNum(num: any, field: any): void;
    discountpromotion(): void;
    discountpercent(): void;
    canceldissmis(): void;
    discountprice(): void;
    chkNumber(num: any, field: any): void;
}

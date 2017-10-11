import { EventEmitter } from '@angular/core';
import { ProductModel } from '../../index';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormProductComponent {
    productBind: ProductModel;
    item: ProductModel;
    categories: any;
    shippings: any;
    shops: any;
    itemClicked: EventEmitter<any>;
    constructor();
    ionViewDidLoad(): void;
    checkedShop(): boolean;
    onClick(item: any): void;
    imageList(e: any): void;
}

import { EventEmitter } from '@angular/core';
import { ProductModel } from './../../models/product.model';
import { ShopModel } from '../../models/shop.model';
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
    shops: ShopModel;
    itemClicked: EventEmitter<any>;
    constructor();
    checkedShop(): boolean;
    onClick(item: any): void;
    imageList(e: any): void;
}

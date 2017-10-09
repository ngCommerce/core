import { ShopModel } from '../../..';
import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormShopComponent {
    item: ShopModel;
    createShop: EventEmitter<any>;
    constructor();
    addShop(item: any): void;
    imageList(e: any): void;
}

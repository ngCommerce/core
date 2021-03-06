import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonListOrderComponent {
    items: any;
    status: string;
    itemClicked: EventEmitter<any>;
    data: any;
    user: any;
    constructor();
    selectOrder(item: any): void;
}

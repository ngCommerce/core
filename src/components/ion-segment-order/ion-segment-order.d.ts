import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonSegmentOrderComponent {
    order: any;
    text: string;
    items: any;
    SelectedOrder: EventEmitter<any>;
    constructor();
    getItem(e: any): void;
    getOrder(): void;
}

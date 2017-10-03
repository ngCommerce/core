import { EventEmitter } from '@angular/core';
import { IonOrdersComponent } from '../ion-orders/ion-orders';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonSegmentOrderComponent {
    parent: IonOrdersComponent;
    order: any;
    text: string;
    items: any;
    SelectedOrder: EventEmitter<any>;
    constructor(parent: IonOrdersComponent);
    getItem(e: any): void;
    getOrder(): void;
}

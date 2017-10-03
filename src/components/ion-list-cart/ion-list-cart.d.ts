import { EventEmitter } from '@angular/core';
/**
 * Generated class for the SearchBarIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonListCartComponent {
    items: Array<any>;
    returnItems: EventEmitter<any>;
    constructor();
    removeItem(index: any): void;
    decrease(item: any): void;
    increase(item: any): void;
}

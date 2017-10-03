import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormConfirmComponent {
    data: any;
    confirmgateway: any;
    gotoNext: EventEmitter<any>;
    confirmdiscount: number;
    constructor();
    discount(data: any): void;
    stepValidation(): void;
}

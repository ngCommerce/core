import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormPaymentComponent {
    data: any;
    paymentgateway: any;
    datashipping: any;
    datapayment: any;
    gotoNext: EventEmitter<any>;
    datapaymentData: EventEmitter<any>;
    channel: string;
    constructor();
    paymentType(e: any): void;
    formcredit(e: any): void;
    stepValidation(): void;
}

import { EventEmitter } from '@angular/core';
import { IonFormPaymentComponent } from './../ion-form-payment/ion-form-payment';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormCreditComponent {
    parent: IonFormPaymentComponent;
    value: string;
    datacredit: EventEmitter<any>;
    data: any;
    constructor(parent: IonFormPaymentComponent);
    formcredit(data: any): void;
}

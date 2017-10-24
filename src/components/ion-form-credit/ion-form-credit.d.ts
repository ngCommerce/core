import { EventEmitter } from '@angular/core';
import { IonFormPaymentOptionComponent } from './../ion-form-paymentoption/ion-form-paymentoption';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormCreditComponent {
    parent: IonFormPaymentOptionComponent;
    value: string;
    datacredit: EventEmitter<any>;
    data: any;
    constructor(parent: IonFormPaymentOptionComponent);
    checkNumber(data: any, from: any): void;
    formcredit(data: any): void;
}

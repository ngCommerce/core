import { Component, Input } from '@angular/core';
import { IonFormPaymentComponent } from './../ion-form-payment/ion-form-payment';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormDeliveryComponent {
    constructor(parent) {
        this.parent = parent;
        // console.log('Hello IonFormPaymentComponent Component');
    }
}
IonFormDeliveryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-form-delivery',
                template: `
    <ion-grid padding *ngIf="parent.channel == value">
    <ion-row>
      <ion-col col-12>การชำระเงินผ่านระบบชำระเงินปลายทาง. ชำระเงินโดยตรงกับพนักงานส่งของในระหว่างการจัดส่งได้ทันที</ion-col>
    </ion-row>
    </ion-grid>
    `,
                styles: [`
  ion-form-delivery {
    
  }`
                ]
            },] },
];
/** @nocollapse */
IonFormDeliveryComponent.ctorParameters = () => [
    { type: IonFormPaymentComponent, },
];
IonFormDeliveryComponent.propDecorators = {
    'value': [{ type: Input },],
};
//# sourceMappingURL=ion-form-delivery.js.map
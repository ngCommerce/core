import { Component, Input } from '@angular/core';
import { IonFormPaymentOptionComponent } from './../ion-form-paymentoption/ion-form-paymentoption';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
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
})
export class IonFormDeliveryComponent {
  @Input() value: string;
  constructor(public parent: IonFormPaymentOptionComponent) {
    // console.log('Hello IonFormPaymentComponent Component');
  }

}

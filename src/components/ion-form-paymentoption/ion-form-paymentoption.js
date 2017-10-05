import { Component, Output, EventEmitter, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormPaymentOptionComponent {
    constructor() {
        this.datapayment = new EventEmitter();
        // console.log('Hello IonFormPaymentComponent Component');
    }
    selectpayment(data) {
        this.datashipping.order.payment = {
            paymenttype: data.name
        };
        this.datapayment.emit(this.datashipping);
    }
}
IonFormPaymentOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-form-paymentoption',
                template: `
    <ion-grid text-right>
    <ion-row>
      <ion-col>
        <ion-row>
          <ion-col text-center *ngFor="let payment of paymentgateway" (click)="selectpayment(payment)">
            <ion-segment color="light" [(ngModel)]="channel">
              <ion-segment-button id="segmentPayment" [value]="payment.name">
              <img src="{{payment.image}}">
              </ion-segment-button>
            </ion-segment>
            <p>{{payment.name}}</p>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ng-content></ng-content>
    `,
                styles: [`
  ion-form-paymentoption {
    
  }`
                ]
            },] },
];
/** @nocollapse */
IonFormPaymentOptionComponent.ctorParameters = () => [];
IonFormPaymentOptionComponent.propDecorators = {
    'paymentgateway': [{ type: Input },],
    'datashipping': [{ type: Input },],
    'channel': [{ type: Input },],
    'datapayment': [{ type: Output },],
};
//# sourceMappingURL=ion-form-paymentoption.js.map
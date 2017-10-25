import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-paymentoption',
    template: `
    <ion-grid text-right>
    <ion-row>
      <ion-col>
        <ion-row>
          <ion-col text-center *ngFor="let payment of paymentgateway" (click)="selectpayment(payment)">
            <ion-segment mode="md" color="light" [(ngModel)]="channel">
              <ion-segment-button id="segmentPayment" [value]="payment.name">
              <span class="{{payment.image}}"></span>
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
})
export class IonFormPaymentOptionComponent {
    @Input() paymentgateway: any;
    @Input() datashipping: any;
    @Input() channel: any;
    @Output() datapayment: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        // console.log('Hello IonFormPaymentComponent Component');
    }
    selectpayment(data) {
        this.datashipping.order.payment = {
            paymenttype: data.name
        };
        this.datapayment.emit(this.datashipping);
    }

}

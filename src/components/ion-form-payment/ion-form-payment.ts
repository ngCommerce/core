import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-payment',
  template: `
  <ion-form-paymentoption [paymentgateway]="paymentgateway.payment" [datashipping]="datashipping" (datapayment)="paymentType($event)"
  [(channel)]="channel">
  <ion-form-credit [steps]="1" (datacredit)="formcredit($event)"></ion-form-credit>
  <ion-form-delivery [steps]="2"></ion-form-delivery>
  <ion-form-counterservice [steps]="3" [paymentgateway]="paymentgateway.counterservice" [datapayment]="datapayment"></ion-form-counterservice>
  <ion-grid>
    <ion-row>
      <ion-col>
        <button ion-button full color="danger" class="slide-next" (click)="stepValidation()">รีวิวการสั่งสินค้า</button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-form-paymentoption>
    `,
  styles: [`
  ion-form-payment {
    
  }`
  ]
})
export class IonFormPaymentComponent {
  data: any = {};
  @Input() paymentgateway: any;
  @Input() datashipping: any;
  datapayment: any = {};
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() datapaymentData: EventEmitter<any> = new EventEmitter<any>();

  steps: Array<any> = [
    {
      value: 1,
      title: "credit"
    },
    {
      value: 2,
      title: "delivery"
    },
    {
      value: 3,
      title: "bank"
    }
  ];
  channel: number = 2;

  constructor() {
    // console.log('Hello IonFormPaymentComponent Component');
  }
  paymentType(e) {
    this.datapayment = e;
  }
  formcredit(e) {
    if (e.creditno) {
      this.datashipping.order.payment.creditno = e.creditno
    }
    if (e.creditname) {
      this.datashipping.order.payment.creditname = e.creditname
    }
    if (e.expdate) {
      this.datashipping.order.payment.expdate = e.expdate
    }
    if (e.creditcvc) {
      this.datashipping.order.payment.creditcvc = e.creditcvc
    }
  }
  stepValidation() {
    this.datapayment = this.datashipping;
    let chk = false;
    if (this.datapayment.order && this.datapayment.order.payment && this.datapayment.order.payment.paymenttype) {
      if (this.datapayment.order.payment.paymenttype === 'credit') {
        if (this.datapayment.order.payment.creditno && this.datapayment.order.payment.creditname && this.datapayment.order.payment.expdate && this.datapayment.order.payment.creditcvc) {
          chk = true;
        }
      } else if (this.datapayment.order.payment.paymenttype === 'delivery') {
        chk = true;
      } else if (this.datapayment.order.payment.paymenttype === 'bank') {
        if (this.datapayment.order.payment.counterservice) {
          chk = true;
        }
      }
    } else {
      this.datapayment.order.payment.paymenttype = this.channel;
    }

    if (chk) {
      this.gotoNext.emit(this.datapayment);
    } else {
      alert('Please enter your payment');
    }
  }

}

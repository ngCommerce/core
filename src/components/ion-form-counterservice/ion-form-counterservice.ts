import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IonFormPaymentComponent } from './../ion-form-payment/ion-form-payment';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-counterservice',
  template: `
    <ion-item-group *ngIf="parent.channel == value">
    <ion-item-divider color="light"><b>bank</b></ion-item-divider>
</ion-item-group>
<ion-grid text-right *ngIf="parent.channel == value">
    <ion-row>
        <ion-col>
            <ion-row>
                <ion-col text-center *ngFor="let counter of paymentgateway" (click)="selectcounter(counter)">
                    <ion-segment color="light" [(ngModel)]="counteractive">
                        <ion-segment-button [value]="counter.name">
                        <p>preload-image</p>
                        </ion-segment-button>
                    </ion-segment>
                    <p>{{counter.name}}</p>
                </ion-col>
            </ion-row>
        </ion-col>
    </ion-row>
</ion-grid>
<ng-content></ng-content>
    `,
  styles: [`
  ion-form-counterservice {
    
  }`
  ]
})
export class IonFormCounterserviceComponent {
  @Input() paymentgateway: any;
  @Input() value: string;
  @Input() datapayment: any;

  constructor(public parent: IonFormPaymentComponent) {
    // console.log('Hello IonFormPaymentComponent Component');
  }
  selectcounter(data) {
    this.datapayment = this.datapayment ? this.datapayment : {};
    this.datapayment.order.payment.counterservice = data.name;
  }

}

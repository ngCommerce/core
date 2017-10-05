import { Component, Input } from '@angular/core';
import { IonFormPaymentOptionComponent } from './../ion-form-paymentoption/ion-form-paymentoption';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormCounterserviceComponent {
    constructor(parent) {
        this.parent = parent;
        // console.log('Hello IonFormPaymentComponent Component');
    }
    selectcounter(data) {
        this.datapayment = this.datapayment ? this.datapayment : {};
        this.datapayment.order.payment.counterservice = data.name;
    }
}
IonFormCounterserviceComponent.decorators = [
    { type: Component, args: [{
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
                        <ion-segment-button id="segmentCounter" [value]="counter.name">
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
            },] },
];
/** @nocollapse */
IonFormCounterserviceComponent.ctorParameters = () => [
    { type: IonFormPaymentOptionComponent, },
];
IonFormCounterserviceComponent.propDecorators = {
    'paymentgateway': [{ type: Input },],
    'value': [{ type: Input },],
    'datapayment': [{ type: Input },],
};
//# sourceMappingURL=ion-form-counterservice.js.map
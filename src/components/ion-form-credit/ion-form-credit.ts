import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IonFormPaymentOptionComponent } from './../ion-form-paymentoption/ion-form-paymentoption';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-credit',
  template: `
    <ion-grid padding *ngIf="parent.channel == value">
    <ion-row>
      <ion-col col-12>
        <ion-list>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label floating>หมายเลขบัตรเครดิต</ion-label>
                <ion-input type="text" [(ngModel)]="data.creditno" (ngModelChange)="formcredit(data)"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
  
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label floating>ชื่อบัตรเครดิต</ion-label>
                <ion-input type="text" [(ngModel)]="data.creditname" (ngModelChange)="formcredit(data)"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>

          <ion-row>
          <ion-col>
            <ion-item>
              <ion-label floating>เดือนที่บัตรหมดอายุ</ion-label>
              <ion-input type="text" [(ngModel)]="data.expmonth" (ngModelChange)="formcredit(data)"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row>
        <ion-col>
          <ion-item>
            <ion-label floating>ปีที่บัตรหมดอายุ</ion-label>
            <ion-input type="text" [(ngModel)]="data.expyear" (ngModelChange)="formcredit(data)"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>

      <ion-row>
      <ion-col>
      <ion-item>
      <ion-label floating>หมายเลขตรวจสอบและยืนยันบัตร</ion-label>
      <ion-input type="text" [(ngModel)]="data.creditcvc" (ngModelChange)="formcredit(data)"></ion-input>
    </ion-item>
      </ion-col>
    </ion-row>
  
        </ion-list>
      </ion-col>
    </ion-row>
  </ion-grid>
    `,
  styles: [`
  ion-form-credit {
    
  }`
  ]
})
export class IonFormCreditComponent {
  @Input() value: string;
  @Output() datacredit: EventEmitter<any> = new EventEmitter<any>();
  data: any = {};
  constructor(public parent: IonFormPaymentOptionComponent) {
    // console.log('Hello IonFormPaymentComponent Component');
  }
  formcredit(data) {
    this.datacredit.emit(data);
  }

}

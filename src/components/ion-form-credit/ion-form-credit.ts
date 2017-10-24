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
                <ion-input type="text" maxlength="16" [(ngModel)]="data.creditno" (ngModelChange)="formcredit(data)"></ion-input>
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
            <ion-col col-6>
              <ion-item>
                <ion-label floating>วันที่บัตรหมดอายุ (MM/YY)</ion-label>
                <ion-input type="text" maxlength="5" [(ngModel)]="data.expdate" (ngModelChange)="formcredit(data)"></ion-input>
              </ion-item>
            </ion-col>
            <ion-col col-6>
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
    if (data.creditno) {
      this.data.creditno = 'sssss';
    }

    if (data.creditcvc) {
      let inputNum = data.creditcvc;
      if (inputNum.length > 1) {
        inputNum = inputNum.substr(inputNum.length - 1);
      }
      let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (num.indexOf(inputNum) !== -1) {
        this.data.creditcvc = data.creditcvc;
      } else {
        this.data.creditcvc = data.creditcvc.substr(0, data.creditcvc.length - 1);
      }
    }

    if (data.expdate) {
      let inputNum = data.expdate;
      if (inputNum.length > 1) {
        inputNum = inputNum.substr(inputNum.length - 1);
      }
      let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (num.indexOf(inputNum) !== -1) {
        this.data.expdate = data.expdate;
      } else {
        this.data.expdate = data.expdate.substr(0, data.expdate.length - 1);
      }

      let old = data.expdate;
      if (data.expdate.length === 4) {
        if (data.expdate.indexOf('/') === -1) {
          data.expdate = old.substr(0, 2) + '/' + old.substr(2, 4);
        }
      }
    }
    this.datacredit.emit(data);
  }

}

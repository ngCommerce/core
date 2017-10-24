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
    let patt = new RegExp('[0-9]{1,30}');
    if (data.creditno) {
      let str = data.creditno;
      let res = patt.exec(str);
      this.data.creditno = res;
    }

    if (data.creditcvc) {
      let str = data.creditcvc;
      let res = patt.exec(str);
      this.data.creditcvc = res;
    }
    
    if (data.expdate) {
      let str = data.expdate;
      let res = patt.exec(str);
      // this.data.expdate = res;
      let old = data.expdate;
      if (data.expdate.length === 4) {
        if (data.expdate.indexOf('/') === -1) {
          data.expdate = old.substr(0, 2) + '/' + old.substr(2, 4);
        }
        this.data.expdate = data.expdate;
      }
    }
    this.datacredit.emit(data);
  }

}

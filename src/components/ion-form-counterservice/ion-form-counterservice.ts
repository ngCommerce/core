import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-counterservice',
    template: `
    <ion-list>
    
      <ion-item>
        
      </ion-item>
    
    </ion-list>
    
    <div>
      <button ion-button block (click)="onClick(item)">Submit</button>
    </div>
    `,
    styles: [`
  ion-form-counterservice {
    
  }`
    ]
})
export class IonFormCounterserviceComponent {
    constructor() {
        // console.log('Hello IonFormPaymentComponent Component');
    }
    
}

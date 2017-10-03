import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-wizard-step',
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
  ion-form-wizard-step {
    
  }`
    ]
})
export class IonFormWizardStepComponent {
    @Input() items: any;
    @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        // console.log('Hello IonFormWizardStepComponent Component');
    }
    onClick(item) {
        this.itemClicked.emit(item);
    }
}

import { Component, Input } from '@angular/core';
import { IonFormWizardComponent } from "../ion-form-wizard/ion-form-wizard";
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-wizard-step',
    template: `
    <ng-content *ngIf="step == parent.currentstep"></ng-content>
    `,
    styles: [`
  ion-form-wizard-step {
    
  }`
    ]
})
export class IonFormWizardStepComponent {
    @Input() step: any;
    constructor(public parent: IonFormWizardComponent) {
        // console.log('Hello IonFormWizardStepComponent Component');
    }
}

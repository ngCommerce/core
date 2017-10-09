import { Component, Input } from '@angular/core';
import { IonFormWizardComponent } from './../ion-form-wizard/ion-form-wizard';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormWizardStepComponent {
    constructor(parent) {
        this.parent = parent;
        // console.log('Hello IonFormWizardStepComponent Component');
    }
}
IonFormWizardStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-form-wizard-step',
                template: `
    <ng-content *ngIf="step == parent.currentstep"></ng-content>
    `,
                styles: [`
  ion-form-wizard-step {
    
  }`
                ]
            },] },
];
/** @nocollapse */
IonFormWizardStepComponent.ctorParameters = () => [
    { type: IonFormWizardComponent, },
];
IonFormWizardStepComponent.propDecorators = {
    'step': [{ type: Input },],
};
//# sourceMappingURL=ion-form-wizard-step.js.map
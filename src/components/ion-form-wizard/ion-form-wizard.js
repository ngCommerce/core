import { Component, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormWizardComponent {
    constructor() {
        // console.log('Hello IonFormWizardComponent Component');
    }
}
IonFormWizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-form-wizard',
                template: `
    <ion-navbar>
    <ion-grid text-right>
      <ion-row>
        <ion-col *ngFor="let step of steps">
          <ion-row>
            <ion-col text-center>
              <ion-segment color="light" [(ngModel)]="currentstep">
                <ion-segment-button [value]="step.value">{{step.value}}</ion-segment-button>
              </ion-segment>
              <p>{{step.title}}</p>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-navbar>
  <ng-content></ng-content>
    `,
                styles: [`
  ion-form-wizard {
    
  }`
                ]
            },] },
];
/** @nocollapse */
IonFormWizardComponent.ctorParameters = () => [];
IonFormWizardComponent.propDecorators = {
    'currentstep': [{ type: Input },],
    'steps': [{ type: Input },],
};
//# sourceMappingURL=ion-form-wizard.js.map
import { Component, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonOrdersComponent {
    constructor() {
        // console.log('Hello IonListProductComponent Component');
    }
}
IonOrdersComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-orders',
                template: `
  <ion-navbar>
  <ion-grid text-right>
    <ion-row>
      <ion-col *ngFor="let step of steps">
        <ion-row>
          <ion-col text-center>
            <ion-segment color="light" class="md" [(ngModel)]="channel">
              <ion-segment-button [ngClass]="channel >= step.value ? 'active' : '' " [value]="step.value">{{step.value}}</ion-segment-button>
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
  ion-orders {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonOrdersComponent.ctorParameters = () => [];
IonOrdersComponent.propDecorators = {
    'channel': [{ type: Input },],
    'steps': [{ type: Input },],
};
//# sourceMappingURL=ion-orders.js.map
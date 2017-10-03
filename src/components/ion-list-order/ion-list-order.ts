import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-order',
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
  ion-list-order {
    background-color: red;
  }`
  ]
})
export class IonListOrderComponent {
    @Input() channel: any;
    @Input() steps:Array<any>;
  constructor() {
    // console.log('Hello IonListProductComponent Component');
  }

}

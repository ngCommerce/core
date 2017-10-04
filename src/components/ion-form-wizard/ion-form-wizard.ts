import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-wizard',
    template: `
    <ion-navbar>
    <ion-grid text-right>
      <ion-row>
        <ion-col *ngFor="let step of steps">
          <ion-row>
            <ion-col text-center>
              <ion-segment color="light" [(ngModel)]="currentstep">
              <p>{{step.title}}</p>
                <ion-segment-button [value]="step.value">{{step.value}}</ion-segment-button>
                <p>{{step.title}}</p>
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
})
export class IonFormWizardComponent {
    @Input() currentstep: any;
    @Input() steps:Array<any>;
    // @Input() items: any;
    // @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        // console.log('Hello IonFormWizardComponent Component');
    }
    // onClick(item) {
    //     this.itemClicked.emit(item);
    // }
}

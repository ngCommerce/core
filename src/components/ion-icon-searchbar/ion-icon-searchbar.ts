import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SearchBarIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-icon-searchbar',
  template: `
  <ion-item>
  <div class="indexIcon">
    <ion-avatar item-left>
      <span class="icon-green-logo"></span>
  <ion-searchbar [(ngModel)]="keys" (ngModelChange)="keySearch(keys)"></ion-searchbar>
  
    </ion-avatar>
  </div>
  <ion-searchbar [(ngModel)]="keys" (ngModelChange)="keySearch(keys)"></ion-searchbar>
    <p></p>
</ion-item>
  `,
  styles: [`
      .item-inner {
        padding-right: 0px; 
        border-bottom: 0px solid #dedede;
      }
      .indexIcon {
        margin-top: -10px !important;
      }
  `]
})
export class IonIconSearchbarComponent {
  @Output() returnData: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
    // console.log('Hello IonIconSearchbarComponent Component');
  }
  keySearch(e) {
    console.log(e);
    this.returnData.emit(e);
  }

}

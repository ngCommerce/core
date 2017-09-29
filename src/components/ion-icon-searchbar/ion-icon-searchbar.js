import { Component, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the SearchBarIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonIconSearchbarComponent {
    constructor() {
        this.returnData = new EventEmitter();
        // console.log('Hello IonIconSearchbarComponent Component');
    }
    keySearch(e) {
        console.log(e);
        this.returnData.emit(e);
    }
}
IonIconSearchbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-icon-searchbar',
                template: `
  <ion-item>
  <ion-avatar class="indexIcon" item-left>
  <span class="icon-green-logo"></span>
  </ion-avatar>
  <ion-searchbar [(ngModel)]="keys" (ngModelChange)="keySearch(keys)"></ion-searchbar>
    <p></p>
</ion-item>
  `,
                styles: [`
    ion-icon-searchbar {
      .item-inner {
        padding-right: 0px; 
        border-bottom: 0px solid #dedede;
      }
      .indexIcon{
        margin-top:-10px !important;
      }
    }
  `]
            },] },
];
/** @nocollapse */
IonIconSearchbarComponent.ctorParameters = () => [];
IonIconSearchbarComponent.propDecorators = {
    'returnData': [{ type: Output },],
};
//# sourceMappingURL=ion-icon-searchbar.js.map
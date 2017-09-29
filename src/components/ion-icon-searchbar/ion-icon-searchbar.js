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
  <ion-avatar item-left>
    <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/21430596_1717394338303097_8955073718525174182_n.jpg?oh=fef743e10f9b6b79deec0a7d9ba4298d&oe=5A3A3E2F">
  </ion-avatar>
  <ion-searchbar [(ngModel)]="keys" (ngModelChange)="keySearch(keys)"></ion-searchbar>
    <p></p>
</ion-item>
  `,
                styles: [`
  .item-inner {
         padding-right: 0px; 
         border-bottom: 0px solid #dedede;
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
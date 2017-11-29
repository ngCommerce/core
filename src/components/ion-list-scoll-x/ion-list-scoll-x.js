import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonListScollXComponent {
    constructor() {
        this.selectedItem = new EventEmitter();
    }
    _selectedItem(data) {
        this.selectedItem.emit(data);
    }
}
IonListScollXComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-list-scoll-x',
                template: `
    <ion-scroll scrollX="true" class="horizontal-categories">
    
     <ion-row id="flexWrap">
       <ion-col col-4 *ngFor="let popular of populars" (click)="_selectedItem(popular)">
         <ion-card>
           <img [src]="popular.image" />
           <ion-item>
             <p class="textImage">{{popular.name}}</p>
           </ion-item>
         </ion-card>
       </ion-col>
     </ion-row>
   
   </ion-scroll>
    `,
                styles: [`
    ion-list-scoll-x {
    
  }`
                ]
            },] },
];
/** @nocollapse */
IonListScollXComponent.ctorParameters = () => [];
IonListScollXComponent.propDecorators = {
    'populars': [{ type: Input },],
    'selectedItem': [{ type: Output },],
};
//# sourceMappingURL=ion-list-scoll-x.js.map
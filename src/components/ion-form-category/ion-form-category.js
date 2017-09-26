import { Component, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormCategoryComponent {
    // @Input() items: any;
    constructor() {
        this.createcate = new EventEmitter();
        this.items = {
            name: ''
        };
        // console.log('Hello IonListCategoryComponent Component');
    }
    addcate(items) {
        this.createcate.emit(items);
    }
}
IonFormCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-form-category',
                template: `
  <ion-list>
  
    <ion-item>
      <ion-label floating>Name Shop</ion-label>
      <ion-input type="text" [(ngModel)]="items.name"></ion-input>
    </ion-item>
  
  </ion-list>

<div padding>
<button ion-button block (click)="addcate(items)">Add</button>
</div>
    `,
                styles: [`
  ion-form-category {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonFormCategoryComponent.ctorParameters = () => [];
IonFormCategoryComponent.propDecorators = {
    'createcate': [{ type: Output },],
};
//# sourceMappingURL=ion-form-category.js.map
import { Component,Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-category',
    template: `
  <ion-list>
  
    <ion-item>
      <ion-label floating>Name Shop</ion-label>
      <ion-input type="text" [(ngModel)]="items.name"></ion-input>
    </ion-item>
  
  </ion-list>

<div padding>
<button block (click)="addcate(items)">Add</button>
</div>
    `,
    styles: [`
  ion-form-category {
    background-color: red;
  }`
    ]
})
export class IonFormCategoryComponent {
    @Output() createcate : EventEmitter<any> = new EventEmitter<any>;
    
     @Input() items: any;
    constructor() {
        // console.log('Hello IonListCategoryComponent Component');
    }
    addcate(items){
        this.createcate.emit(items);

    }

}

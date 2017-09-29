import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SearchBarIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-cart',
  template: `
    <ion-list>
    <ion-item *ngFor="let item of [1,2,3,4,5,6,7,8,9]">
      <ion-thumbnail item-start>
        <img src="https://im9.cz/iR/importprodukt-orig/38c/38cc33bafaad5147a77d475eafd49cd1--mmf250x250.jpg">
      </ion-thumbnail>
      <h2>iPhone</h2>
      <p>100 บาท</p>
      <ion-grid>
        <ion-row>
          <ion-col col-6>
            <ion-icon name="trash"></ion-icon>
          </ion-col>
          <ion-col col-6>
            <button ion-button icon-only small>
            <ion-icon name="add"></ion-icon>
            </button>
            <label class="count">1</label>
            <button ion-button icon-only small>
            <ion-icon name="remove"></ion-icon>
            </button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
  </ion-list>
  `,
  styles: [`
  
  `]
})
export class IonListCartComponent {


  constructor() {
    
  }

}

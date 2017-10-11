import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    <ion-item *ngFor="let item of items; let i = index">
      <ion-thumbnail item-start>
        <img [src]="item.product.images[0]">
      </ion-thumbnail>
      <h2>{{ item.product.name }}</h2>
      <p>{{ item.product.price }} {{ item.product.currency }}</p>
      <ion-grid>
        <ion-row>
          <ion-col col-6 id="cartTrash">
            <ion-icon name="trash" (click)="removeItem(i)"></ion-icon>
          </ion-col>
          <ion-col col-6>
            <button ion-button icon-only small id="cartDecrease" (click)="decrease(item)">
              <ion-icon name="remove"></ion-icon>
            </button>
            <label class="count">{{ item.qty }}</label>
            <button ion-button icon-only small  id="cartIncrease"  (click)="increase(item)">
              <ion-icon name="add"></ion-icon>
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

  @Input() items: Array<any>;
  @Output() returnItems: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.returnItems.emit(this.items);
  }

  decrease(item) {
    item.qty--;
    this.returnItems.emit(this.items);
  }

  increase(item) {
    item.qty++;
    this.returnItems.emit(this.items);
  }

}

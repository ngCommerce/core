import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-segment-order',
  template: `
  <div *ngIf="parent.channel == 1">
  <ion-list-order [items]="items.waiting" [status]="'waiting'" (itemClicked)="getItem($event)" (click)="getOrder()"></ion-list-order>
</div>
<div *ngIf="parent.channel == 2">
  <ion-list-order [items]="items.accept" [status]="'accept'" (itemClicked)="getItem($event)" (click)="getOrder()"></ion-list-order>
</div>
<div *ngIf="parent.channel == 3">
  <ion-list-order [items]="items.sent" [status]="'sent'" (itemClicked)="getItem($event)" (click)="getOrder()"></ion-list-order>
</div>
<div *ngIf="parent.channel == 4">
  <ion-list-order [items]="items.return" [status]="'return'" (itemClicked)="getItem($event)" (click)="getOrder()"></ion-list-order>
</div>
    `,
  styles: [`
  ion-segment-order {
    background-color: red;
  }`
  ]
})
export class IonSegmentOrderComponent {
    order: any;
    text: string;
    @Input() items: any;
    @Output() SelectedOrder: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    // console.log('Hello IonListProductComponent Component');
  }
  getItem(e) {
    this.order = e;
  }

  getOrder() {
    this.SelectedOrder.emit(this.order);
  }
}

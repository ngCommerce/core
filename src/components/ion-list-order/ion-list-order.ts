import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-list-order',
  template: `
    <div *ngIf="items">
      <ion-list *ngFor="let item of items; let i = index">
        <ion-item (click)="selectOrder(item)">
          <ion-row>
            <ion-col no-padding width-33 class="magin-right-10-custom">
              <img src="{{item.image}}">
            </ion-col>
            <ion-col *ngIf="item.status === status">
              <p id="pName">{{item.name}}</p>
              <p id="pQty">{{item.qty}} qty</p>
              <p id="pPrice">{{item.price | number}} Baht</p>
              <p text-right id="pStatus" >{{item.status}}</p>
            </ion-col>
          </ion-row>
        </ion-item>
      </ion-list>
    </div>
    `,
  styles: [`
  ion-list-order {
    background-color: red;
  }`
  ]
})
export class IonListOrderComponent {
  @Input() items: any;
  @Input() status: string;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  data: any = {};

  user: any = {
    shop: {
      _id: ''
    }
  };
  constructor() {
    // console.log('Hello IonListProductComponent Component');
  }
  selectOrder(item) {
    this.data = item;
    // this.navCtrl.push(OrderDetailPage);
    this.itemClicked.emit(this.data);
  }
}

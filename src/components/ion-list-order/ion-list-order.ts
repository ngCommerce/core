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
  <div>
    <div *ngFor="let item of items; let i = index">
      <ion-list (click)="selectOrder(item)">
        <ion-item>
          <ion-row>
            <ion-col no-padding width-33 class="magin-right-10-custom">
              <preload-image [src]="item.image"></preload-image>
            </ion-col>
            <ion-col *ngIf="item.status === status">
              <p>{{item.name}}</p>
              <p>{{item.qty}} qty</p>
              <p class="color-orenge-custom">{{item.price | number}} Baht</p>
              <p text-right class="color-green-custom">{{item.status}}</p>
            </ion-col>
          </ion-row>
        </ion-item>
      </ion-list>
    </div>
  </div>
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

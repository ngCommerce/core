import { Component, Input } from "@angular/core";

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "ion-list-grid",
  template: `
    <ion-grid>
    <ion-row>
      <ion-col col-6 *ngIf="items && items.length > 0">
        <img src="{{items[0].image}}">
        <div class="p-margin-top-50">
        <p>{{items[0].name}}</p>
        <p>{{items[0].price}}</p>
        </div>
      </ion-col>
      <ion-col col-6>
        <ion-row>
          <ion-col col-6 *ngIf="items && items.length > 1">
            <img src="{{items[1].image}}">
            <div lass="p-margin-top-40">
            <p>{{items[1].name}}</p>
            <p>{{items[1].price}}</p>
            </div>
          </ion-col>
          <ion-col col-6 *ngIf="items && items.length > 2">
            <img src="{{items[2].image}}">
            <div lass="p-margin-top-40">
            <p>{{items[2].name}}</p>
            <p>{{items[2].price}}</p>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-6 *ngIf="items && items.length > 3">
            <img src="{{items[3].image}}">
            <div lass="p-margin-top-40">
            <p>{{items[3].name}}</p>
            <p>{{items[3].price}}</p>
            </div>
          </ion-col>
          <ion-col col-6 *ngIf="items && items.length > 4">
            <img src="{{items[4].image}}">
            <div lass="p-margin-top-40">
            <p>{{items[4].name}}</p>
            <p>{{items[4].price}}</p>
            </div>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-grid>
  
    `,
  styles: [
    `
    .p-margin-top-50 {
      margin-top: -50px;
    }
    .p-margin-top-40 {
        margin-top: -30px;
        font-size: 12px;
    }   
    `
  ]
})
export class IonListGridComponent {
  @Input() items: Array<any>;

  constructor() {
    // console.log('Hello IonFormShopComponent Component');
  }
}

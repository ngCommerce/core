import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-form-profile',
    template: ` 
  <ion-list>
  <button ion-item  *ngIf="!item">
          <ion-icon name="ios-happy-outline" item-start></ion-icon>
          Sign in
      </button>
  <button ion-item *ngIf="item">
          <ion-icon name="ios-happy-outline" item-start></ion-icon>
         {{item.displayName}} 
      </button>
</ion-list>
<ion-list>
  <button ion-item>
          <ion-icon name="ios-notifications-outline" item-start></ion-icon>
          Push notification
      </button>
  <button ion-item>
          <ion-icon name="ios-filing-outline" item-start></ion-icon>
          History log
      </button>
  <button ion-item *ngIf="profileData"  >
          <ion-icon name="ios-pin-outline" item-start></ion-icon>
          Location
      </button>
</ion-list>
<ion-list >
  <button ion-item>
          <ion-icon name="ios-settings-outline" item-start></ion-icon>
          Setting
      </button>
</ion-list>
<ion-list>
  <button ion-item>
          <ion-icon name="ios-create-outline" item-start></ion-icon>
          Change language
      </button>
</ion-list>
<ion-list>
  <button ion-item>
          <ion-icon name="ios-document-outline" item-start></ion-icon>
          Policy
      </button>
  <button ion-item>
          <ion-icon name="ios-help-circle-outline" item-start></ion-icon>
          Help
      </button>
</ion-list>
<ion-list *ngIf="profileData">
  <button ion-item>
          <ion-icon name="ios-log-out-outline" item-start></ion-icon>
          logout
      </button>
</ion-list>
    `,
    styles: [`
  ion-form-profile {
    background-color: red;
  }`
    ]
})
export class IonFormProfileComponent {
    @Input() item: any;
    @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        // console.log('Hello IonListCategoryComponent Component');
    }
    onClick(item) {
        this.itemClicked.emit(item);
    }
}

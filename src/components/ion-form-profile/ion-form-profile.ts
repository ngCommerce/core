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
  <button ion-item  *ngIf="!item" (click)="login()">
          <ion-icon name="ios-happy-outline" item-start></ion-icon>
          Sign in
      </button>
  <button ion-item *ngIf="item">
          <ion-icon name="ios-happy-outline" item-start></ion-icon>
         {{item.displayName}} 
      </button>
</ion-list>
<ion-list>
  <button ion-item (click)="onNotification()">
          <ion-icon name="ios-notifications-outline" item-start></ion-icon>
          Notification
      </button>
  <button ion-item>
          <ion-icon name="ios-filing-outline" item-start></ion-icon>
          History log
      </button>
  <button ion-item *ngIf="item"  >
          <ion-icon name="ios-pin-outline" item-start></ion-icon>
          Location
      </button>
</ion-list>
<ion-list >
  <button ion-item (click)="setting()">
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
<ion-list *ngIf="item">
  <button ion-item (click)="logout()">
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
    @Output() settingClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() notificationClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() loginClicked: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        // console.log('Hello IonListCategoryComponent Component');
    }

    logout() {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('gCart');
        this.itemClicked.emit('logout');
    }

    onNotification() {
        this.notificationClicked.emit('onNotification');
    }

    setting() {
        this.settingClicked.emit('setting');
    }

    login() {
        this.loginClicked.emit('login');
    }
}

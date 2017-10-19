import { Component, Output, EventEmitter, Input } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormProfileComponent {
    constructor() {
        this.itemClicked = new EventEmitter();
        this.settingProfileClicked = new EventEmitter();
        this.manageShopClicked = new EventEmitter();
        this.notificationClicked = new EventEmitter();
        this.loginClicked = new EventEmitter();
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
    manageShop() {
        this.manageShopClicked.emit('manageShop');
    }
    login() {
        this.loginClicked.emit('login');
    }
    settingProfile() {
        this.settingProfileClicked.emit('settingProfile');
    }
}
IonFormProfileComponent.decorators = [
    { type: Component, args: [{
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
  <button ion-item (click)="onNotification()" *ngIf="isNotification">
          <ion-icon name="ios-notifications-outline" item-start></ion-icon>
          Notification
      </button>
  <button ion-item *ngIf="waitFanction">
          <ion-icon name="ios-filing-outline" item-start></ion-icon>
          History log
      </button>
  <button ion-item *ngIf="item || waitFanction"  >
          <ion-icon name="ios-pin-outline" item-start></ion-icon>
          Location
      </button>
</ion-list>
<ion-list >
    <button ion-item (click)="settingProfile()" *ngIf="isSettingProfile">
        <ion-icon name="ios-contact-outline" item-start></ion-icon>
            Setting Profile
    </button>
    <button ion-item (click)="manageShop()" *ngIf="isShop">
          <ion-icon name="ios-settings-outline" item-start></ion-icon>
          Manage Shop
    </button>
</ion-list>
<ion-list *ngIf="waitFanction">
  <button ion-item>
          <ion-icon name="ios-create-outline" item-start></ion-icon>
          Change language
      </button>
</ion-list>
<ion-list *ngIf="waitFanction">
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
            },] },
];
/** @nocollapse */
IonFormProfileComponent.ctorParameters = () => [];
IonFormProfileComponent.propDecorators = {
    'isShop': [{ type: Input },],
    'waitFanction': [{ type: Input },],
    'item': [{ type: Input },],
    'itemClicked': [{ type: Output },],
    'settingProfileClicked': [{ type: Output },],
    'manageShopClicked': [{ type: Output },],
    'notificationClicked': [{ type: Output },],
    'loginClicked': [{ type: Output },],
};
//# sourceMappingURL=ion-form-profile.js.map
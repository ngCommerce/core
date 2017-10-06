"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let IonFormProfileComponent = class IonFormProfileComponent {
    constructor() {
        this.itemClicked = new core_1.EventEmitter();
        this.settingClicked = new core_1.EventEmitter();
        this.notificationClicked = new core_1.EventEmitter();
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
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonFormProfileComponent.prototype, "item", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormProfileComponent.prototype, "itemClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormProfileComponent.prototype, "settingClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFormProfileComponent.prototype, "notificationClicked", void 0);
IonFormProfileComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [])
], IonFormProfileComponent);
exports.IonFormProfileComponent = IonFormProfileComponent;
//# sourceMappingURL=ion-form-profile.js.map
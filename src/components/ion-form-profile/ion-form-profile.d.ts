import { EventEmitter } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonFormProfileComponent {
    item: any;
    itemClicked: EventEmitter<any>;
    settingProfileClicked: EventEmitter<any>;
    manageShopClicked: EventEmitter<any>;
    notificationClicked: EventEmitter<any>;
    loginClicked: EventEmitter<any>;
    constructor();
    logout(): void;
    onNotification(): void;
    manageShop(): void;
    login(): void;
    settingProfile(): void;
}

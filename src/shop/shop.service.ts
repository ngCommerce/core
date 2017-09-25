import { Injectable, Inject } from "@angular/core";

export const API_URL = "";

@Injectable()
export class ShopService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String) {
        this._apiURL = apiURL;
    }

    getShopList() {
        return this._apiURL + 'shops';
    }

    createShop() {
        return this._apiURL + 'shops';
    }

    updateShopByID(ID) {
        return this._apiURL + 'shops/' + ID;
    }

    deleteShopByID(ID) {
        return this._apiURL + 'shops/' + ID;
    }
}

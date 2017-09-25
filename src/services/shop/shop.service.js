import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class ShopService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    getShopList() {
        return this.http.get('http://greenvintage-v1.herokuapp.com/api/shops')
            .toPromise()
            .then(response => response.json())
            .catch(error => null);
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
ShopService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ShopService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
];
//# sourceMappingURL=shop.service.js.map
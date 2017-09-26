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
        return this.http.get(this._apiURL + 'shops')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createShop(data) {
        return this.http.post(this._apiURL + 'shops', data)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateShopByID(data) {
        return this.http.put(this._apiURL + 'shops/' + data._id, data)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getShopByID(id) {
        return this.http.get(this._apiURL + 'shops/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteShopByID(id) {
        return this.http.delete(this._apiURL + 'shops/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.message || error);
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
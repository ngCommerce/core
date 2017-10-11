import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { API_URL } from "../../models/core.model";
export class ShopService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getShopList() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shops/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createShop(data) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'shops/', data, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateShopByID(data) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'shops/' + data._id, data, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    reviewShop(data) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'shops/review/' + data._id, data, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getShopByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shops/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteShopByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'shops/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getShopListByUser() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shopbyuser/', { headers: headers })
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
    { type: CorService, },
];
//# sourceMappingURL=shop.service.js.map
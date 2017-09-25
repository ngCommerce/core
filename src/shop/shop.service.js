import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../core.service";
var ShopService = (function () {
    function ShopService(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    ShopService.prototype.getShopList = function () {
        return this.http.get('http://greenvintage-v1.herokuapp.com/api/shops')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return null; });
    };
    ShopService.prototype.createShop = function () {
        return this._apiURL + 'shops';
    };
    ShopService.prototype.updateShopByID = function (ID) {
        return this._apiURL + 'shops/' + ID;
    };
    ShopService.prototype.deleteShopByID = function (ID) {
        return this._apiURL + 'shops/' + ID;
    };
    return ShopService;
}());
export { ShopService };
ShopService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ShopService.ctorParameters = function () { return [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
]; };
//# sourceMappingURL=shop.service.js.map
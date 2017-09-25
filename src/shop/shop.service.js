import { Injectable, Inject } from "@angular/core";
export var API_URL = "";
var ShopService = (function () {
    function ShopService(apiURL) {
        this._apiURL = apiURL;
    }
    ShopService.prototype.getShopList = function () {
        return this._apiURL + 'shops';
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
]; };
//# sourceMappingURL=shop.service.js.map
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../core.service";
var ProductService = (function () {
    function ProductService(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    ProductService.prototype.getProductList = function () {
        // return this._apiURL;
        return this.http.get('http://greenvintage-v1.herokuapp.com/api/products')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return null; });
    };
    return ProductService;
}());
export { ProductService };
ProductService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ProductService.ctorParameters = function () { return [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
]; };
//# sourceMappingURL=product.service.js.map
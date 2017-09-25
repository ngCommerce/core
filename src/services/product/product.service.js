import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class ProductService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    getProductList() {
        // return this._apiURL;
        return this.http.get('http://greenvintage-v1.herokuapp.com/api/products')
            .toPromise()
            .then(response => response.json())
            .catch(error => null);
    }
}
ProductService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ProductService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
];
//# sourceMappingURL=product.service.js.map
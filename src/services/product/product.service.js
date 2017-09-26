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
        return this.http.get(this._apiURL + 'products')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getProductByID(id) {
        return this.http.get(this._apiURL + 'products/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createProduct(product) {
        return this.http.post(this._apiURL + 'products', product)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateProduct(product) {
        return this.http.post(this._apiURL + 'products/' + product._id, product)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteProduct(id) {
        return this.http.delete(this._apiURL + 'products/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.message || error);
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
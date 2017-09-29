import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class CartService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL + 'carts/';
    }
    createAuthorizationHeader(token) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + token);
        return headers;
    }
    getCartList(token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createCart(Cart, token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.post(this._apiURL, Cart, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getCartByID(id, token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateCart(Cart, token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.put(this._apiURL + Cart._id, Cart, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteCart(id, token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.delete(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
}
CartService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CartService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
];
//# sourceMappingURL=cart.service.js.map
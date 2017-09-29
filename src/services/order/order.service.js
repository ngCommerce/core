import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class OrderService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL + 'orders/';
    }
    createAuthorizationHeader(token) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + token);
        return headers;
    }
    getOrderList(token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createOrder(Order, token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.post(this._apiURL, Order, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getOrderByID(id, token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateOrder(Order, token) {
        let headers = this.createAuthorizationHeader(token);
        return this.http.put(this._apiURL + Order._id, Order, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteOrder(id, token) {
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
OrderService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
OrderService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
];
//# sourceMappingURL=order.service.js.map
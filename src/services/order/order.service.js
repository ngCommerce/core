import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
export class OrderService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getOrderList(token) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'orders/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createOrder(Order, token) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'orders/', Order, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getOrderByID(id, token) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'orders/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateOrder(Order, token) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'orders/' + Order._id, Order, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteOrder(id, token) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'orders/' + id, { headers: headers })
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
    { type: CorService, },
];
//# sourceMappingURL=order.service.js.map
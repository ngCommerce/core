import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
export class OrderService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getOrderList() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .get(this._apiURL + "orders/", { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createOrder(Order) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .post(this._apiURL + "orders/", Order, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getOrderByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .get(this._apiURL + "orders/" + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateOrder(Order) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .put(this._apiURL + "orders/" + Order._id, Order, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteOrder(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .delete(this._apiURL + "orders/" + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getOrderByShop(shopId) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .get(this._apiURL + "orderbyshop/" + shopId, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateItemToAccept(orderId, itemId) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .put(this._apiURL + "updateorderaccept/" + orderId + "/" + itemId, null, {
            headers: headers
        })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateItemToSent(orderId, itemId) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .put(this._apiURL + "updateordersent/" + orderId + "/" + itemId, null, {
            headers: headers
        })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateItemToComplete(orderId, itemId) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .put(this._apiURL + "updateordercomplete/" + orderId + "/" + itemId, null, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateItemToReject(orderId, itemId) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .put(this._apiURL + "updateorderreject/" + orderId + "/" + itemId, null, {
            headers: headers
        })
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
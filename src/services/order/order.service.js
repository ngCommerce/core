"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
const core_model_1 = require("../../models/core.model");
const core_service_1 = require("../../core.service");
let OrderService = class OrderService {
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
    getOrderByShop() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http
            .get(this._apiURL + "orderbyshop", { headers: headers })
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
};
OrderService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_model_1.API_URL)),
    __metadata("design:paramtypes", [String,
        http_1.Http,
        core_service_1.CorService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map
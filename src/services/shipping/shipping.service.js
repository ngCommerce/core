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
let ShippingService = class ShippingService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getShippingList() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shippings/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getShippingByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shippings/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createShipping(shipping) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'shippings/', shipping, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateShipping(shipping) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'shippings/' + shipping._id, shipping, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteShipping(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'shippings/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
};
ShippingService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_model_1.API_URL)),
    __metadata("design:paramtypes", [String, http_1.Http, core_service_1.CorService])
], ShippingService);
exports.ShippingService = ShippingService;
//# sourceMappingURL=shipping.service.js.map
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { API_URL } from "../../models/core.model";
export class HomeService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getHome() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'homes/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    seeAllProduct(name) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'api/seeallproduct/' + name, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    seeAllShop(name) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'api/seeallshop/' + name, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getLastVisit() {
        return window.localStorage.getItem('gLastVisit') ? JSON.parse(window.localStorage.getItem('gLastVisit')) : [];
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
}
HomeService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HomeService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
    { type: CorService, },
];
//# sourceMappingURL=home.service.js.map
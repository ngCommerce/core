import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
export class ShippingService {
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
}
ShippingService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ShippingService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
    { type: CorService, },
];
//# sourceMappingURL=shipping.service.js.map
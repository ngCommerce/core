import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class ShippingService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    getShippingList() {
        return this.http.get(this._apiURL + 'shippings')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getShippingByID(id) {
        return this.http.get(this._apiURL + 'shippings/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createShipping(shipping) {
        return this.http.post(this._apiURL + 'shippings', shipping)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateShipping(shipping) {
        return this.http.post(this._apiURL + 'shippings/' + shipping._id, shipping)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteShipping(id) {
        return this.http.delete(this._apiURL + 'shippings/' + id)
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
];
//# sourceMappingURL=shipping.service.js.map
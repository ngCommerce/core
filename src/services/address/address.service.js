import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class AddressService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    getAddressList() {
        return this.http.get(this._apiURL + 'addresses')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getAddressByID(id) {
        return this.http.get(this._apiURL + 'addresses/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createAddress(product) {
        return this.http.post(this._apiURL + 'addresses', product)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateAddress(product) {
        return this.http.post(this._apiURL + 'addresses/' + product._id, product)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteAddress(id) {
        return this.http.delete(this._apiURL + 'addresses/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
}
AddressService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AddressService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
];
//# sourceMappingURL=address.service.js.map
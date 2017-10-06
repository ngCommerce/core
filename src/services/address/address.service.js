import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
export class AddressService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getAddressList() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'addresses/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getAddressByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'addresses/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createAddress(product) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'addresses/', product, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateAddress(product) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'addresses/' + product._id, product, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteAddress(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'addresses/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getAddressByUser() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'addressbyuser/', { headers: headers })
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
    { type: CorService, },
];
//# sourceMappingURL=address.service.js.map
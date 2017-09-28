import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { AddressModel } from "../../models/address.model";

@Injectable()
export class AddressService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL;
    }

    getAddressList(): Promise<AddressModel> {
        return this.http.get(this._apiURL + 'addresses')
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    getAddressByID(id): Promise<AddressModel> {
        return this.http.get(this._apiURL + 'addresses/' + id)
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    createAddress(product): Promise<AddressModel> {
        return this.http.post(this._apiURL + 'addresses', product)
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    updateAddress(product): Promise<AddressModel> {
        return this.http.post(this._apiURL + 'addresses/' + product._id, product)
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    deleteAddress(id): Promise<AddressModel> {
        return this.http.delete(this._apiURL + 'addresses/' + id)
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
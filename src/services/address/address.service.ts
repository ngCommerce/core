import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
import { AddressModel, ListAddressModel } from "../../models/address.model";

@Injectable()
export class AddressService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getAddressList(): Promise<Array<AddressModel>> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'addresses/', { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<AddressModel>)
            .catch(this.handleError);
    }

    getAddressByID(id): Promise<AddressModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'addresses/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    createAddress(product): Promise<AddressModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'addresses/', product, { headers: headers })
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    updateAddress(product): Promise<AddressModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'addresses/' + product._id, product, { headers: headers })
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    deleteAddress(id): Promise<AddressModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'addresses/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as AddressModel)
            .catch(this.handleError);
    }

    getAddressByUser(): Promise<ListAddressModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'addressbyuser/', { headers: headers })
            .toPromise()
            .then(response => response.json() as ListAddressModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
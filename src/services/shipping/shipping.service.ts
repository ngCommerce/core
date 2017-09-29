import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
import { ShippingModel } from "../../models/shipping.model";

@Injectable()
export class ShippingService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getShippingList(): Promise<ShippingModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shippings/', { headers: headers })
            .toPromise()
            .then(response => response.json() as ShippingModel)
            .catch(this.handleError);
    }

    getShippingByID(id): Promise<ShippingModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shippings/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShippingModel)
            .catch(this.handleError);
    }

    createShipping(shipping): Promise<ShippingModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'shippings/', shipping, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShippingModel)
            .catch(this.handleError);
    }

    updateShipping(shipping): Promise<ShippingModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'shippings/' + shipping._id, shipping, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShippingModel)
            .catch(this.handleError);
    }

    deleteShipping(id): Promise<ShippingModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'shippings/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShippingModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
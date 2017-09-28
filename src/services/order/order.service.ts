import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { OrderModel } from "../../models/Order.model";

@Injectable()
export class OrderService {
    private _apiURL: string;
    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL + 'orders/';
    }

    createAuthorizationHeader(token) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + token);
        return headers;
    }

    getOrderList(token): Promise<Array<OrderModel>> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL, { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<OrderModel>)
            .catch(this.handleError);
    }

    createOrder(Order, token): Promise<OrderModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.post(this._apiURL, Order, { headers: headers })
            .toPromise()
            .then(response => response.json() as OrderModel)
            .catch(this.handleError);
    }

    getOrderByID(id, token): Promise<OrderModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as OrderModel)
            .catch(this.handleError);
    }

    updateOrder(Order, token): Promise<OrderModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.put(this._apiURL + Order._id, Order, { headers: headers })
            .toPromise()
            .then(response => response.json() as OrderModel)
            .catch(this.handleError);
    }

    deleteOrder(id, token): Promise<OrderModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.delete(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as OrderModel)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
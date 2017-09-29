import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
import { OrderModel } from "../../models/Order.model";

@Injectable()
export class OrderService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getOrderList(token): Promise<Array<OrderModel>> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'orders/', { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<OrderModel>)
            .catch(this.handleError);
    }

    createOrder(Order, token): Promise<OrderModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'orders/', Order, { headers: headers })
            .toPromise()
            .then(response => response.json() as OrderModel)
            .catch(this.handleError);
    }

    getOrderByID(id, token): Promise<OrderModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'orders/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as OrderModel)
            .catch(this.handleError);
    }

    updateOrder(Order, token): Promise<OrderModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'orders/' + Order._id, Order, { headers: headers })
            .toPromise()
            .then(response => response.json() as OrderModel)
            .catch(this.handleError);
    }

    deleteOrder(id, token): Promise<OrderModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'orders/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as OrderModel)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
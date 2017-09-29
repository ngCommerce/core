import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
import { CartModel } from "../../models/Cart.model";

@Injectable()
export class CartService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getCartList(token): Promise<Array<CartModel>> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'carts/', { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<CartModel>)
            .catch(this.handleError);
    }

    createCart(Cart, token): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'carts/', Cart, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    getCartByID(id, token): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'carts/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    updateCart(Cart, token): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'carts/' + Cart._id, Cart, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    deleteCart(id, token): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'carts/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
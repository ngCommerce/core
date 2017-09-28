import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CartModel } from "../../models/Cart.model";

@Injectable()
export class CartService {
    private _apiURL: string;
    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL + 'carts/';
    }

    createAuthorizationHeader(token) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + token);
        return headers;
    }

    getCartList(token): Promise<Array<CartModel>> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL, { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<CartModel>)
            .catch(this.handleError);
    }

    createCart(Cart, token): Promise<CartModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.post(this._apiURL, Cart, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    getCartByID(id, token): Promise<CartModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    updateCart(Cart, token): Promise<CartModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.put(this._apiURL + Cart._id, Cart, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    deleteCart(id, token): Promise<CartModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.delete(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
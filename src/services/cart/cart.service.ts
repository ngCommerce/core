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

    getCartList(): Promise<Array<CartModel>> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'carts/', { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<CartModel>)
            .catch(this.handleError);
    }

    createCart(Cart): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'carts/', Cart, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    getCartByID(id): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'carts/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    updateCart(Cart): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'carts/' + Cart._id, Cart, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    deleteCart(id): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'carts/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    getCartByUser(userId): Promise<Array<CartModel>> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'cartbyuser/' + userId, { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<CartModel>)
            .catch(this.handleError);
    }


    addToCart(product) {
        let cartStorage = window.localStorage.getItem('gCart') ? JSON.parse(window.localStorage.getItem('gCart')) : null;
        if (cartStorage && cartStorage.items.length > 0) {

            for (var i = 0; i < cartStorage.items.length; i++) {
                var item = cartStorage.items[i];
                if (product._id === item.product._id) {
                    item.qty++;
                    item.amount = product.price * item.qty;
                    item.discount = product.promotionprice ? (product.price - product.promotionprice) * item.qty : 0;
                    item.totalamount = item.amount - item.discount;
                    window.localStorage.setItem('gCart', JSON.stringify(cartStorage));
                    this.getCartStorage();
                }
            }

        }
        if (!cartStorage) {
            cartStorage = {
                items: []
            }
        }
        cartStorage.items.push({
            product: product,
            qty: 1,
            amount: product.price,
            discount: product.promotionprice ? (product.price - product.promotionprice) : 0,
            totalamount: product.promotionprice
        });
        window.localStorage.setItem('gCart', JSON.stringify(cartStorage));
        this.getCartStorage();

    }

    getCartStorage() {
        return window.localStorage.getItem('gCart') ? JSON.parse(window.localStorage.getItem('gCart')) : null;
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
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

    getCartByUser(userId): Promise<CartModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'cartbyuser/' + userId, { headers: headers })
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }


    addToCart(product) {
        let cartStorage = window.localStorage.getItem('gCart') ? JSON.parse(window.localStorage.getItem('gCart')) : [];
        if (cartStorage && cartStorage.items && cartStorage.items.length > 0) {

            for (var i = 0; i < cartStorage.items.length; i++) {
                var item = cartStorage.items[i];
                if (product._id === item.product._id) {
                    item.qty++;
                    item.amount = product.price * item.qty;
                    item.discount = product.promotionprice ? (product.price - product.promotionprice) * item.qty : 0;
                    item.totalamount = item.amount - item.discount;
                    window.localStorage.setItem('gCart', JSON.stringify(cartStorage));
                    this.getCartStorage();
                    return;
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
        return;

    }

    getCartStorage() {
        return window.localStorage.getItem('gCart') ? JSON.parse(window.localStorage.getItem('gCart')) : null;
    }

    saveCartStorage(cart) {
        window.localStorage.setItem('gCart', JSON.stringify(cart));
        return;
    }

    onCalculate(cart) {
        
        if (cart && cart.items) {
            cart.amount = 0;
            cart.discount = 0;
            cart.totalamount = 0;
            for (var i = 0; i < cart.items.length; i++) {
                let item = cart.items[i];
                let promotionprice = item.product.promotionprice ? item.product.promotionprice : 0;
                item.amount = item.product.price * item.qty;
                item.discount = promotionprice > 0 ? (item.product.price - promotionprice) * item.qty : 0;
                item.totalamount = item.amount - item.discount;

                cart.amount += item.amount;
                cart.discount += item.discount;
                cart.totalamount += item.totalamount;
            }
        }

        return cart;

    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
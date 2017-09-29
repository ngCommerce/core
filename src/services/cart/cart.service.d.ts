import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CartModel } from "../../models/Cart.model";
export declare class CartService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    createAuthorizationHeader(token: any): Headers;
    getCartList(token: any): Promise<Array<CartModel>>;
    createCart(Cart: any, token: any): Promise<CartModel>;
    getCartByID(id: any, token: any): Promise<CartModel>;
    updateCart(Cart: any, token: any): Promise<CartModel>;
    deleteCart(id: any, token: any): Promise<CartModel>;
    private handleError(error);
}

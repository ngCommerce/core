import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { CartModel } from "../../models/Cart.model";
export declare class CartService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getCartList(token: any): Promise<Array<CartModel>>;
    createCart(Cart: any, token: any): Promise<CartModel>;
    getCartByID(id: any, token: any): Promise<CartModel>;
    updateCart(Cart: any, token: any): Promise<CartModel>;
    deleteCart(id: any, token: any): Promise<CartModel>;
    private handleError(error);
}

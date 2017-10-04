import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { CartModel } from "../../models/Cart.model";
export declare class CartService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getCartList(): Promise<Array<CartModel>>;
    createCart(Cart: any): Promise<CartModel>;
    getCartByID(id: any): Promise<CartModel>;
    updateCart(Cart: any): Promise<CartModel>;
    deleteCart(id: any): Promise<CartModel>;
    getCartByUser(userId: any): Promise<CartModel>;
    addToCart(product: any): void;
    getCartStorage(): any;
    saveCartStorage(cart: any): void;
    onCalculate(cart: any): any;
    private handleError(error);
}

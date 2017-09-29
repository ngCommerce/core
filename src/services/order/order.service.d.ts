import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { OrderModel } from "../../models/Order.model";
export declare class OrderService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    createAuthorizationHeader(token: any): Headers;
    getOrderList(token: any): Promise<Array<OrderModel>>;
    createOrder(Order: any, token: any): Promise<OrderModel>;
    getOrderByID(id: any, token: any): Promise<OrderModel>;
    updateOrder(Order: any, token: any): Promise<OrderModel>;
    deleteOrder(id: any, token: any): Promise<OrderModel>;
    private handleError(error);
}

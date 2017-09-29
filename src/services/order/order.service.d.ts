import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { OrderModel } from "../../models/Order.model";
export declare class OrderService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getOrderList(token: any): Promise<Array<OrderModel>>;
    createOrder(Order: any, token: any): Promise<OrderModel>;
    getOrderByID(id: any, token: any): Promise<OrderModel>;
    updateOrder(Order: any, token: any): Promise<OrderModel>;
    deleteOrder(id: any, token: any): Promise<OrderModel>;
    private handleError(error);
}

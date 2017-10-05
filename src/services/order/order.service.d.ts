import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { OrderModel, ItemByOrderByShopModel } from "../../models/Order.model";
export declare class OrderService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getOrderList(): Promise<Array<OrderModel>>;
    createOrder(Order: any): Promise<OrderModel>;
    getOrderByID(id: any): Promise<OrderModel>;
    updateOrder(Order: any): Promise<OrderModel>;
    deleteOrder(id: any): Promise<OrderModel>;
    getOrderByShop(): Promise<ItemByOrderByShopModel>;
    updateItemToAccept(orderId: any, itemId: any): Promise<OrderModel>;
    updateItemToSent(orderId: any, itemId: any): Promise<OrderModel>;
    updateItemToComplete(orderId: any, itemId: any): Promise<OrderModel>;
    updateItemToReject(orderId: any, itemId: any): Promise<OrderModel>;
    private handleError(error);
}

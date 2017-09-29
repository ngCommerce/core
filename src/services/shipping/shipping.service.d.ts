import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ShippingModel } from "../../models/shipping.model";
export declare class ShippingService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    getShippingList(): Promise<ShippingModel>;
    getShippingByID(id: any): Promise<ShippingModel>;
    createShipping(shipping: any): Promise<ShippingModel>;
    updateShipping(shipping: any): Promise<ShippingModel>;
    deleteShipping(id: any): Promise<ShippingModel>;
    private handleError(error);
}

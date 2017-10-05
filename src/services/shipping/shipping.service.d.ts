import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { ShippingModel } from "../../models/shipping.model";
export declare class ShippingService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getShippingList(): Promise<Array<ShippingModel>>;
    getShippingByID(id: any): Promise<ShippingModel>;
    createShipping(shipping: any): Promise<ShippingModel>;
    updateShipping(shipping: any): Promise<ShippingModel>;
    deleteShipping(id: any): Promise<ShippingModel>;
    private handleError(error);
}

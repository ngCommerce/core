import { ShopListModel, ShopModel } from '../../models/shop.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export declare class ShopService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    getShopList(): Promise<ShopListModel>;
    createShop(data: any): Promise<ShopModel>;
    updateShopByID(data: any): Promise<ShopModel>;
    getShopByID(id: any): Promise<ShopModel>;
    deleteShopByID(id: any): Promise<ShopModel>;
    private handleError(error);
}

import { ShopListModel, ShopModel } from '../../models/shop.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
export declare class ShopService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getShopList(): Promise<ShopListModel>;
    createShop(data: any): Promise<ShopModel>;
    updateShopByID(data: any): Promise<ShopModel>;
    reviewShop(data: any): Promise<ShopModel>;
    getShopByID(id: any): Promise<ShopModel>;
    deleteShopByID(id: any): Promise<ShopModel>;
    getShopListByUser(): Promise<Array<ShopModel>>;
    private handleError(error);
}

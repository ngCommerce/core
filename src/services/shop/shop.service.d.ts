import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export declare class ShopService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    getShopList(): Promise<any>;
    createShop(): string;
    updateShopByID(ID: string): string;
    deleteShopByID(ID: string): string;
}

import { ShopListModel, ShopModel } from '../../models/shop.model';
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";

@Injectable()
export class ShopService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL;
    }
    getShopList(): Promise<ShopListModel> {
        return this.http.get(this._apiURL + 'shops')
            .toPromise()
            .then(response => response.json() as ShopListModel)
            .catch(this.handleError);
    }

    createShop(data): Promise<ShopModel> {
        return this.http.post(this._apiURL + 'shops',data)
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    updateShopByID(data): Promise<ShopModel> {
        return this.http.put(this._apiURL + 'shops/'+data._id,data)
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    getShopByID(id): Promise<ShopModel> {
        return this.http.get(this._apiURL + 'shops/'+id)
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    deleteShopByID(id): Promise<ShopModel> {
        return this.http.delete(this._apiURL + 'shops/'+id)
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}

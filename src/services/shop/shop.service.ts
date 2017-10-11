import { ShopListModel, ShopModel } from '../../models/shop.model';
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { API_URL } from "../../models/core.model";

@Injectable()
export class ShopService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }
    getShopList(): Promise<ShopListModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shops/', { headers: headers })
            .toPromise()
            .then(response => response.json() as ShopListModel)
            .catch(this.handleError);
    }

    createShop(data): Promise<ShopModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'shops/', data, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    updateShopByID(data): Promise<ShopModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'shops/' + data._id, data, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    reviewShop(data): Promise<ShopModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'shops/review/' + data._id, data, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    getShopByID(id): Promise<ShopModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shops/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    deleteShopByID(id): Promise<ShopModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'shops/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShopModel)
            .catch(this.handleError);
    }

    getShopListByUser(): Promise<Array<ShopModel>> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'shopbyuser/', { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<ShopModel>)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}

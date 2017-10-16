import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { API_URL } from "../../models/core.model";
import { HomeCategoryModel, HomeSellerModel } from "../../models/home.model";
import { ShopListModel } from '../../models/shop.model';
import { ProductListModel } from './../../models/product.model';



@Injectable()
export class HomeService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getHome(): Promise<HomeCategoryModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'homes/', { headers: headers })
            .toPromise()
            .then(response => response.json() as HomeCategoryModel)
            .catch(this.handleError);
    }

    getHomeSeller(shopId): Promise<HomeSellerModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'homeseller/' + shopId, { headers: headers })
            .toPromise()
            .then(response => response.json() as HomeSellerModel)
            .catch(this.handleError);
    }

    seeAllProduct(name): Promise<ProductListModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'seeallproduct/' + name, { headers: headers })
            .toPromise()
            .then(response => response.json() as ProductListModel)
            .catch(this.handleError);
    }

    seeAllShop(name): Promise<ShopListModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'seeallshop/' + name, { headers: headers })
            .toPromise()
            .then(response => response.json() as ShopListModel)
            .catch(this.handleError);
    }

    getLastVisit() {
        return window.localStorage.getItem('gLastVisit') ? JSON.parse(window.localStorage.getItem('gLastVisit')) : [];
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}

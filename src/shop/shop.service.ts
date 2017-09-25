import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../core.service";

@Injectable()
export class ShopService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL;
    }

    getShopList() {
        return this.http.get('http://greenvintage-v1.herokuapp.com/api/shops')
        .toPromise()
        .then(response => response.json())
        .catch(error => null);
    }

    createShop() {
        return this._apiURL + 'shops';
    }

    updateShopByID(ID: string) {
        return this._apiURL + 'shops/' + ID;
    }

    deleteShopByID(ID: string) {
        return this._apiURL + 'shops/' + ID;
    }
}

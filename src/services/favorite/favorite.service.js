import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { API_URL } from "../../models/core.model";
// import { CorService } from "../../core.service";
export class FavoriteService {
    // private _apiURL: String;
    constructor(http) {
        this.http = http;
        // this._apiURL = apiURL;
    }
    getFavoriteList() {
        return JSON.parse(window.localStorage.getItem('favproduct'));
    }
    addFavorite(product) {
        this.getFavoriteList().then((data) => {
            data.items = data.items ? data.items : [];
            data.items.push(product);
            window.localStorage.setItem('favproduct', JSON.stringify(data));
        });
        return JSON.parse(window.localStorage.getItem('favproduct'));
    }
    removeFavorite(index) {
        this.getFavoriteList().then((data) => {
            data.items.splice(index, 1);
            window.localStorage.setItem('favproduct', JSON.stringify(data));
        });
        return JSON.parse(window.localStorage.getItem('favproduct'));
    }
}
FavoriteService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FavoriteService.ctorParameters = () => [
    { type: Http, },
];
//# sourceMappingURL=favorite.service.js.map
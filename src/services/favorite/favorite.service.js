import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
export class FavoriteService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
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
    handleError(error) {
        return Promise.reject(error.message || error);
    }
}
FavoriteService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FavoriteService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
    { type: CorService, },
];
//# sourceMappingURL=favorite.service.js.map
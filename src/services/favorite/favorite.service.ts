import { FavoriteListModel } from './../../models/favorite.model';
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { API_URL } from "../../models/core.model";
// import { CorService } from "../../core.service";

@Injectable()
export class FavoriteService {
    // private _apiURL: String;
    constructor(public http: Http) {
        // this._apiURL = apiURL;
    }

    getFavoriteList(): Promise<FavoriteListModel> {
        return window.localStorage.getItem('favproduct') ? JSON.parse(window.localStorage.getItem('favproduct')) : [];
    }

    addFavorite(product): Promise<FavoriteListModel> {
        this.getFavoriteList().then((data) => {
            data.items = data.items ? data.items : [];
            data.items.push(product);
            window.localStorage.setItem('favproduct', JSON.stringify(data));
        });
        return JSON.parse(window.localStorage.getItem('favproduct'));
    }
    removeFavorite(index): Promise<FavoriteListModel> {
        this.getFavoriteList().then((data) => {
            data.items.splice(index, 1);
            window.localStorage.setItem('favproduct', JSON.stringify(data));
        });
        return JSON.parse(window.localStorage.getItem('favproduct'));
    }
}
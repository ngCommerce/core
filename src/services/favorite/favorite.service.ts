import { FavoriteListModel } from './../../models/favorite.model';
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FavoriteService {
    favorite = { items: [] } as FavoriteListModel;
    constructor(public http: Http) {
    }


    getFavoriteList(): Promise<FavoriteListModel> {
        return JSON.parse(window.localStorage.getItem('favproduct')) || this.favorite;
    }

    addFavorite(product): Promise<FavoriteListModel> {
        this.favorite = JSON.parse(window.localStorage.getItem('favproduct')) || this.favorite;
        this.favorite.items = this.favorite.items ? this.favorite.items : [];
        let chkFavorite = this.favorite.items.filter(function (obj) { return obj._id == product._id; });
        if (chkFavorite.length > 0) {
            return this.getFavoriteList();
        } else {
            this.favorite.items.push(product);
            window.localStorage.setItem('favproduct', JSON.stringify(this.favorite));
            return this.getFavoriteList();
        }

    }
    removeFavorite(index): Promise<FavoriteListModel> {
        this.favorite = JSON.parse(window.localStorage.getItem('favproduct'));
        this.favorite.items.splice(index, 1);
        window.localStorage.setItem('favproduct', JSON.stringify(this.favorite));
        return this.getFavoriteList();
    }
}
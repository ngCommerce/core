import { FavoriteListModel } from './../../models/favorite.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export declare class FavoriteService {
    http: Http;
    constructor(http: Http);
    getFavoriteList(): Promise<FavoriteListModel>;
    addFavorite(product: any): Promise<FavoriteListModel>;
    removeFavorite(index: any): Promise<FavoriteListModel>;
}

import { FavoriteListModel } from './../../models/favorite.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
export declare class FavoriteService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getFavoriteList(): Promise<FavoriteListModel>;
    addFavorite(product: any): Promise<FavoriteListModel>;
    removeFavorite(index: any): Promise<FavoriteListModel>;
    private handleError(error);
}

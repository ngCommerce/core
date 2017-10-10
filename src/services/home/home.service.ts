import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { API_URL } from "../../models/core.model";
import { HomeCategoryModel } from "../../models/home.model";

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

    getLastVisit() {
        return window.localStorage.getItem('gLastVisit') ? JSON.parse(window.localStorage.getItem('gLastVisit')) : [];
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}

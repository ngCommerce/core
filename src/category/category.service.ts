import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../core.service";

@Injectable()
export class CategoryService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL;
    }

    public getCategoryList() {
        // return this._apiURL;
        return this.http.get('http://greenvintage-v1.herokuapp.com/api/categories')
            .toPromise()
            .then(response => response.json())
            .catch(error => null);
    }
}
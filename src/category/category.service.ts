import { Injectable, Inject } from "@angular/core";

export const API_URL = "";

@Injectable()
export class CategoryService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String) {
        this._apiURL = apiURL;
    }

    getCategoryList() {
        return this._apiURL + 'categories';
    }
}
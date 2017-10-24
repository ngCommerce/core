import { Injectable, Inject } from "@angular/core";
import { API_URL } from "./models/core.model";
import { Headers } from "@angular/http";
@Injectable()
export class CorService {

    get apiURL(): String {
        return this._apiURL;
    }
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String) {
        this._apiURL = apiURL;
    }

    createAuthorizationHeader() {
        let headers = new Headers();
        let token = window.localStorage.getItem('token');
        headers.append("Authorization", "Bearer " + token);
        return headers;
    }

}
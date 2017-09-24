import {Injectable, Inject} from "@angular/core";

export const API_URL = "";


@Injectable()
export class CorService {

    get apiURL(): String {
        return this._apiURL;
    }
    private _apiURL: String;
    constructor(@Inject(API_URL) apiURL: String) {
        this._apiURL = apiURL;
    }
    
}
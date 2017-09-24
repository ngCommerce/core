import {Injectable, Inject} from "@angular/core";

export const API_URL = "";


@Injectable()
export class CorService {

    get apiURL(): String {
        //console.log('object');
        return this._apiURL;
        //return "test";
    }
    private _apiURL: String;
    constructor(@Inject(API_URL) apiURL: String) {
        //console.log(apiURL);
        this._apiURL = apiURL;
    }
    
}
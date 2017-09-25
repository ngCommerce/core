import {Injectable, Inject} from "@angular/core";
import { API_URL } from "./models/core.model";

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
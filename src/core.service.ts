import {Injectable, Inject} from "@angular/core";

export const API_URL = "";


@Injectable()
export class CorService {

    get apiURL(): String {
        //console.log('object');
        return this.apiURL;
    }
    constructor(@Inject(API_URL) apiURL: String) {
        //console.log(apiURL);
    }
}
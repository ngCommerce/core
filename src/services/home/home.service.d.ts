import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { HomeCategoryModel } from "../../models/home.model";
export declare class HomeService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getHome(): Promise<HomeCategoryModel>;
    getLastVisit(): any;
    private handleError(error);
}

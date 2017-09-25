import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export declare class ProductService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    getProductList(): Promise<any>;
}

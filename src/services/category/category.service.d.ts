import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CategoryModel } from "../../models/category.model";
export declare class CategoryService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    getCategoryList(): Promise<Array<CategoryModel>>;
    private handleError(error);
}

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { CategoryModel } from "../../models/category.model";
export declare class TestService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getCategoryList(): Promise<Array<CategoryModel>>;
    createCategory(category: any): Promise<CategoryModel>;
    getCategoryByID(id: any): Promise<CategoryModel>;
    updateCategory(category: any): Promise<CategoryModel>;
    deleteCategory(id: any): Promise<CategoryModel>;
    private handleError(error);
}

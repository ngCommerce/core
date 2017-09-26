import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CategoryModel } from "../../models/category.model";

@Injectable()
export class CategoryService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL;
    }

    getCategoryList(): Promise<Array<CategoryModel>> {
        return this.http.get(this._apiURL + 'categories')
            .toPromise()
            .then(response => response.json() as Array<CategoryModel>)
            .catch(this.handleError);
    }

    createCategory(category): Promise<CategoryModel> {
        return this.http.post(this._apiURL + 'categories', category)
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    getCategoryByID(id): Promise<CategoryModel> {
        return this.http.get(this._apiURL + 'categories/' + id)
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    deleteCategory(id): Promise<CategoryModel> {
        return this.http.delete(this._apiURL + 'categories/' + id)
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
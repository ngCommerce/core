import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CategoryModel } from "../../models/category.model";

@Injectable()
export class CategoryService {
    private _apiURL: string;
    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL + 'categories/';
    }

    createAuthorizationHeader(token) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + token);
        return headers;
    }

    getCategoryList(token): Promise<Array<CategoryModel>> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL, { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<CategoryModel>)
            .catch(this.handleError);
    }

    createCategory(category, token): Promise<CategoryModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.post(this._apiURL, category, { headers: headers })
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    getCategoryByID(id, token): Promise<CategoryModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.get(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    updateCategory(category, token): Promise<CategoryModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.put(this._apiURL + category._id, category, { headers: headers })
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    deleteCategory(id, token): Promise<CategoryModel> {
        let headers = this.createAuthorizationHeader(token);
        return this.http.delete(this._apiURL + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
import { CategoryModel } from "../../models/category.model";

@Injectable()
export class CategoryService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getCategoryList(): Promise<Array<CategoryModel>> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'categories/', { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<CategoryModel>)
            .catch(this.handleError);
    }

    createCategory(category): Promise<CategoryModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'categories/', category, { headers: headers })
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    getCategoryByID(id): Promise<CategoryModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'categories/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    updateCategory(category): Promise<CategoryModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'categories/' + category._id, category, { headers: headers })
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    deleteCategory(id): Promise<CategoryModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'categories/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CategoryModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
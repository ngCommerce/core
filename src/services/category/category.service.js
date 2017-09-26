import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class CategoryService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    getCategoryList() {
        return this.http.get(this._apiURL + 'categories')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createCategory(category) {
        return this.http.post(this._apiURL + 'categories', category)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getCategoryByID(id) {
        return this.http.get(this._apiURL + 'categories/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateCategory(category) {
        return this.http.put(this._apiURL + 'categories/' + category._id, category)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteCategory(id) {
        return this.http.delete(this._apiURL + 'categories/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
}
CategoryService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CategoryService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
];
//# sourceMappingURL=category.service.js.map
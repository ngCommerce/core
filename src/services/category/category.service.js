import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
export class CategoryService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getCategoryList() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'categories/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createCategory(category) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'categories/', category, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getCategoryByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'categories/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateCategory(category) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'categories/' + category._id, category, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteCategory(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'categories/' + id, { headers: headers })
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
    { type: CorService, },
];
//# sourceMappingURL=category.service.js.map
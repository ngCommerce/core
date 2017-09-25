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
        return this.http.get(this._apiURL + '/api/dataofcategories')
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
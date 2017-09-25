import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../core.service";
var CategoryService = (function () {
    function CategoryService(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    CategoryService.prototype.getCategoryList = function () {
        // return this._apiURL;
        return this.http.get('http://greenvintage-v1.herokuapp.com/api/categories')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return null; });
    };
    return CategoryService;
}());
export { CategoryService };
CategoryService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CategoryService.ctorParameters = function () { return [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
]; };
//# sourceMappingURL=category.service.js.map
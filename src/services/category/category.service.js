"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
const core_model_1 = require("../../models/core.model");
let CategoryService = class CategoryService {
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
};
CategoryService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_model_1.API_URL)),
    __metadata("design:paramtypes", [String, http_1.Http])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map
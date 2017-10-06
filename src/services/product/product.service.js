import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { API_URL } from "../../models/core.model";
export class ProductService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getProductList() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'products/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getProductByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'products/' + id, { headers: headers })
            .toPromise()
            .then((response) => {
            this.updateHitoryLog(id);
            this.saveLastVisit(response.json());
            return response.json();
        })
            .catch(this.handleError);
    }
    createProduct(product) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'products/', product, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateProduct(product) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'products/' + product._id, product, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteProduct(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'products/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getProductListByShop(shopId) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'productsbyshop/' + shopId, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    reviewProduct(productId, review) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'products/review/' + productId, review, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    saveLastVisit(product) {
        let lastVisit = window.localStorage.getItem('gLastVisit') ? JSON.parse(window.localStorage.getItem('gLastVisit')) : [];
        let duplicate = lastVisit.forEach((obj, index) => {
            if (obj._id === product._id) {
                return index;
            }
        });
        if (duplicate) {
            lastVisit.splice(duplicate, 1);
        }
        lastVisit.unshift({
            _id: product._id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            promotionprice: product.promotionprice,
            percentofdiscount: product.percentofdiscount,
            currency: product.currency,
            rate: product.rate,
        });
        if (lastVisit.length > 5) {
            lastVisit = lastVisit.slice(0, 5);
        }
        window.localStorage.setItem('gLastVisit', JSON.stringify(lastVisit));
        return;
    }
    updateHitoryLog(id) {
        let headers = this.corService.createAuthorizationHeader();
        this.http.get(this._apiURL + 'productupdatehitorylog/' + id, { headers: headers })
            .toPromise()
            .then(response => {
            // console.log('Update log : ', response);
        })
            .catch((error) => {
            // console.log('Update log error : ', error);
        });
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
}
ProductService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ProductService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
    { type: CorService, },
];
//# sourceMappingURL=product.service.js.map
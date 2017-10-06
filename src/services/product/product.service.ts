import { ProductListModel, ProductModel } from './../../models/product.model';
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { API_URL } from "../../models/core.model";

@Injectable()
export class ProductService {

    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getProductList(): Promise<ProductListModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'products/', { headers: headers })
            .toPromise()
            .then(response => response.json() as ProductListModel)
            .catch(this.handleError);
    }

    getProductByID(id): Promise<ProductModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'products/' + id, { headers: headers })
            .toPromise()
            .then((response) => {
                this.updateHitoryLog(id);
                return response.json() as ProductModel
            })
            .catch(this.handleError);
    }

    createProduct(product): Promise<ProductModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'products/', product, { headers: headers })
            .toPromise()
            .then(response => response.json() as ProductModel)
            .catch(this.handleError);
    }

    updateProduct(product): Promise<ProductModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'products/' + product._id, product, { headers: headers })
            .toPromise()
            .then(response => response.json() as ProductModel)
            .catch(this.handleError);
    }

    deleteProduct(id): Promise<ProductModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'products/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as ProductModel)
            .catch(this.handleError);
    }

    getProductListByShop(shopId): Promise<ProductListModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'productsbyshop/' + shopId, { headers: headers })
            .toPromise()
            .then(response => response.json() as ProductListModel)
            .catch(this.handleError);
    }

    reviewProduct(productId, review): Promise<ProductModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'products/review/' + productId, review, { headers: headers })
            .toPromise()
            .then(response => response.json() as ProductModel)
            .catch(this.handleError);
    }

    private saveLastVisit(product) {
        let lastVisit = window.localStorage.getItem('gLastVisit') ? JSON.parse(window.localStorage.getItem('gLastVisit')) : [];
        let duplicate = lastVisit.array.forEach((obj, index) => {
            if (obj._id === product._id) return index;
        });

        if (duplicate) {
            lastVisit.splice(duplicate, 1);
        }

        lastVisit.unshift(product);

        if (lastVisit.length > 5) {
            lastVisit = lastVisit.slice(0, 5);
            window.localStorage.setItem('gLastVisit', JSON.stringify(lastVisit));
            return;
        }

    }

    private updateHitoryLog(id) {
        let headers = this.corService.createAuthorizationHeader();
        this.http.get(this._apiURL + 'productupdatehitorylog/' + id, { headers: headers })
            .toPromise()
            .then(response => {
                console.log('Update log : ', response);
            })
            .catch((error) => {
                console.log('Update log error : ', error);
            });
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
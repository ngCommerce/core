import { ProductListModel, ProductModel } from './../../models/product.model';
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";

@Injectable()
export class ProductService {

    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL;
    }

    getProductList(): Promise<ProductListModel> {
        return this.http.get(this._apiURL + 'products')
            .toPromise()
            .then(response => response.json() as ProductListModel)
            .catch(this.handleError);
    }

    getProductByID(id): Promise<ProductModel> {
        return this.http.get(this._apiURL + 'products/' + id)
            .toPromise()
            .then(response => response.json() as ProductModel)
            .catch(this.handleError);
    }

    createProduct(product): Promise<ProductModel> {
        return this.http.post(this._apiURL + 'products', product)
            .toPromise()
            .then(response => response.json() as ProductModel)
            .catch(this.handleError);
    }

    updateProduct(product): Promise<ProductModel> {
        return this.http.post(this._apiURL + 'products/' + product._id, product)
            .toPromise()
            .then(response => response.json() as ProductModel)
            .catch(this.handleError);
    }

    deleteProduct(id): Promise<ProductModel> {
        return this.http.delete(this._apiURL + 'products/' + id)
            .toPromise()
            .then(response => response.json() as ProductModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
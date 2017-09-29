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
            .then(response => response.json() as ProductModel)
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

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
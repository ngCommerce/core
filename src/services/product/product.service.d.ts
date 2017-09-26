import { ProductListModel, ProductModel } from './../../models/product.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export declare class ProductService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    getProductList(): Promise<ProductListModel>;
    getProductByID(id: any): Promise<ProductModel>;
    createProduct(product: any): Promise<ProductModel>;
    updateProduct(product: any): Promise<ProductModel>;
    deleteProduct(id: any): Promise<ProductModel>;
    private handleError(error);
}

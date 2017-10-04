import { ProductListModel, ProductModel } from './../../models/product.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
export declare class ProductService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getProductList(): Promise<ProductListModel>;
    getProductByID(id: any): Promise<ProductModel>;
    createProduct(product: any): Promise<ProductModel>;
    updateProduct(product: any): Promise<ProductModel>;
    deleteProduct(id: any): Promise<ProductModel>;
    getProductListByShop(shopId: any): Promise<ProductListModel>;
    private handleError(error);
}

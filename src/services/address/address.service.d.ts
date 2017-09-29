import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AddressModel } from "../../models/address.model";
export declare class AddressService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    getAddressList(): Promise<AddressModel>;
    getAddressByID(id: any): Promise<AddressModel>;
    createAddress(product: any): Promise<AddressModel>;
    updateAddress(product: any): Promise<AddressModel>;
    deleteAddress(id: any): Promise<AddressModel>;
    private handleError(error);
}

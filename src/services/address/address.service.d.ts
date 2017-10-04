import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { AddressModel, ListAddressModel } from "../../models/address.model";
export declare class AddressService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getAddressList(): Promise<Array<AddressModel>>;
    getAddressByID(id: any): Promise<AddressModel>;
    createAddress(product: any): Promise<AddressModel>;
    updateAddress(product: any): Promise<AddressModel>;
    deleteAddress(id: any): Promise<AddressModel>;
    getAddressByUser(): Promise<ListAddressModel>;
    private handleError(error);
}

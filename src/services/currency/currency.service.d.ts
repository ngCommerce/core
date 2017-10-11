import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { CurrencyModel } from "../../models/currency.model";
export declare class CurrencyService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getCurrencyList(): Promise<Array<CurrencyModel>>;
    createCurrency(currency: any): Promise<CurrencyModel>;
    getCurrencyByID(id: any): Promise<CurrencyModel>;
    updateCurrency(currency: any): Promise<CurrencyModel>;
    deleteCurrency(id: any): Promise<CurrencyModel>;
    private handleError(error);
}

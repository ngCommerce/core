import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
import { CurrencyModel } from "../../models/currency.model";

@Injectable()
export class CurrencyService {
    private _apiURL: String;
    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getCurrencyList(): Promise<Array<CurrencyModel>> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'currencies/', { headers: headers })
            .toPromise()
            .then(response => response.json() as Array<CurrencyModel>)
            .catch(this.handleError);
    }

    createCurrency(currency): Promise<CurrencyModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'currencies/', currency, { headers: headers })
            .toPromise()
            .then(response => response.json() as CurrencyModel)
            .catch(this.handleError);
    }

    getCurrencyByID(id): Promise<CurrencyModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'currencies/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CurrencyModel)
            .catch(this.handleError);
    }

    updateCurrency(currency): Promise<CurrencyModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'currencies/' + currency._id, currency, { headers: headers })
            .toPromise()
            .then(response => response.json() as CurrencyModel)
            .catch(this.handleError);
    }

    deleteCurrency(id): Promise<CurrencyModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'currencies/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as CurrencyModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
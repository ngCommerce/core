import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
import { PaymentModel } from "../../models/payment.model";

@Injectable()
export class PaymentService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    getPaymentList(): Promise<PaymentModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'payments/', { headers: headers })
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    getPaymentByID(id): Promise<PaymentModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'payments/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    createPayment(payment): Promise<PaymentModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'payments/', payment, { headers: headers })
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    updatePayment(payment): Promise<PaymentModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'payments/' + payment._id, payment, { headers: headers })
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    deletePayment(id): Promise<PaymentModel> {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'payments/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
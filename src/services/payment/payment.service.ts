import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { PaymentModel } from "../../models/payment.model";

@Injectable()
export class PaymentService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL;
    }

    getPaymentList(): Promise<PaymentModel> {
        return this.http.get(this._apiURL + 'payments')
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    getPaymentByID(id): Promise<PaymentModel> {
        return this.http.get(this._apiURL + 'payments/' + id)
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    createPayment(payment): Promise<PaymentModel> {
        return this.http.post(this._apiURL + 'payments', payment)
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    updatePayment(payment): Promise<PaymentModel> {
        return this.http.post(this._apiURL + 'payments/' + payment._id, payment)
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    deletePayment(id): Promise<PaymentModel> {
        return this.http.delete(this._apiURL + 'payments/' + id)
            .toPromise()
            .then(response => response.json() as PaymentModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
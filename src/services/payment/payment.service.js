import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class PaymentService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    getPaymentList() {
        return this.http.get(this._apiURL + 'payments')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getPaymentByID(id) {
        return this.http.get(this._apiURL + 'payments/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createPayment(payment) {
        return this.http.post(this._apiURL + 'payments', payment)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updatePayment(payment) {
        return this.http.post(this._apiURL + 'payments/' + payment._id, payment)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deletePayment(id) {
        return this.http.delete(this._apiURL + 'payments/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
}
PaymentService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PaymentService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
];
//# sourceMappingURL=payment.service.js.map
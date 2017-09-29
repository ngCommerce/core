import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
export class PaymentService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getPaymentList() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'payments/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getPaymentByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'payments/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createPayment(payment) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'payments/', payment, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updatePayment(payment) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'payments/' + payment._id, payment, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deletePayment(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'payments/' + id, { headers: headers })
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
    { type: CorService, },
];
//# sourceMappingURL=payment.service.js.map
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PaymentModel } from "../../models/payment.model";
export declare class PaymentService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    getPaymentList(): Promise<PaymentModel>;
    getPaymentByID(id: any): Promise<PaymentModel>;
    createPayment(payment: any): Promise<PaymentModel>;
    updatePayment(payment: any): Promise<PaymentModel>;
    deletePayment(id: any): Promise<PaymentModel>;
    private handleError(error);
}

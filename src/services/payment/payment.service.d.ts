import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CorService } from "../../core.service";
import { PaymentModel } from "../../models/payment.model";
export declare class PaymentService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    getPaymentList(): Promise<PaymentModel>;
    getPaymentByID(id: any): Promise<PaymentModel>;
    createPayment(payment: any): Promise<PaymentModel>;
    updatePayment(payment: any): Promise<PaymentModel>;
    deletePayment(id: any): Promise<PaymentModel>;
    private handleError(error);
}

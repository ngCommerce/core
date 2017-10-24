import 'rxjs/add/operator/toPromise';
export declare class OmiseService {
    constructor();
    checkTokenByCredit(payment: any): Promise<{}>;
    paymenyByCredit(id: any, money: any): Promise<{}>;
    paymenyByBank(bank: any, money: any): Promise<{}>;
}

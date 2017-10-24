import 'rxjs/add/operator/toPromise';
export declare class OmiseService {
    private _omiseKey;
    constructor(omiseKey: String);
    checkTokenByCredit(payment: any): Promise<{}>;
    paymenyByCredit(id: any, money: any): Promise<{}>;
    paymenyByBank(bank: any, money: any): Promise<{}>;
}

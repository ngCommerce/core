import 'rxjs/add/operator/toPromise';
export declare class OmiseService {
    constructor();
    checkTokenByCredit(omiseKey: any, payment: any): Promise<{}>;
    paymenyByCredit(omiseKey: any, id: any, money: any): Promise<{}>;
    paymenyByBank(omiseKey: any, bank: any, money: any): Promise<{}>;
}

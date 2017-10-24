var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Injectable } from "@angular/core";
import Omise from 'omise';
import 'rxjs/add/operator/toPromise';
export class OmiseService {
    constructor() {
    }
    checkTokenByCredit(payment) {
        let omise = new Omise({
            'publicKey': 'pkey_test_59owuo5m3qynavw8mac',
            'secretKey': 'skey_test_59owuo5mlz8nv5s6tux'
        });
        let currentstep = null;
        let detailCard = {
            card: {
                name: payment.paymenttype,
                number: payment.creditno,
                expiration_month: payment.expdate.substr(0, 2),
                expiration_year: payment.expdate.substr(2, 4),
                security_code: payment.creditcvc
            }
        };
        return new Promise((resolve, reject) => {
            omise.tokens.create(detailCard, function (token) {
            }).then(function (data) {
                return __awaiter(this, void 0, void 0, function* () {
                    resolve(data);
                });
            }).error(function (err) {
                return __awaiter(this, void 0, void 0, function* () {
                    reject(err);
                });
            }).done();
        });
    }
    paymenyByCredit(id, money) {
        let omise = new Omise({
            'publicKey': 'pkey_test_59owuo5m3qynavw8mac',
            'secretKey': 'skey_test_59owuo5mlz8nv5s6tux'
        });
        money = money * 100;
        return new Promise((resolve, reject) => {
            omise.charges.create({
                'description': 'Charge for order ID: 888',
                'amount': money,
                'currency': 'thb',
                'capture': false,
                'card': id
            }, function (err, resp) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(resp);
                }
            });
        });
    }
    paymenyByBank(bank, money) {
        let omise = new Omise({
            'publicKey': 'pkey_test_59owuo5m3qynavw8mac',
            'secretKey': 'skey_test_59owuo5mlz8nv5s6tux'
        });
        money = money * 100;
        return new Promise((resolve, reject) => {
            omise.charges.create({
                'description': 'Charge for order ID: 888',
                'amount': money,
                'currency': 'thb',
                "offsite": bank,
                "return_uri": "http://res.cloudinary.com/hzzat7wj2/image/upload/v1508821471/Pmss_new_oqvtlw.jpg"
            }, function (err, resp) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(resp);
                }
            });
        });
    }
}
OmiseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
OmiseService.ctorParameters = () => [];
//# sourceMappingURL=omise.service.js.map
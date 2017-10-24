import { Injectable } from "@angular/core";
import Omise from 'omise';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OmiseService {
    constructor() {
    }
    checkTokenByCredit(payment) {
        let omise = new Omise({
            'publicKey': 'pkey_test_59owuo5m3qynavw8mac', //pkey_test_58zdlcecghhko63vy18
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
            }).then(async function (data) {
                resolve(data);
            }).error(async function (err) {
                reject(err)
            }).done();
        })
    }
    paymenyByCredit(id, money) {
        let omise = new Omise({
            'publicKey': 'pkey_test_59owuo5m3qynavw8mac', //pkey_test_58zdlcecghhko63vy18
            'secretKey': 'skey_test_59owuo5mlz8nv5s6tux'
        });
        money = money * 100;
        return new Promise((resolve, reject) => {
            omise.charges.create({
                'description': 'Charge for order ID: 888',
                'amount': money, // 1,000 Baht
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
            'publicKey': 'pkey_test_59owuo5m3qynavw8mac', //pkey_test_58zdlcecghhko63vy18
            'secretKey': 'skey_test_59owuo5mlz8nv5s6tux'
        });
        money = money * 100;        
        return new Promise((resolve, reject) => {
            omise.charges.create({
                'description': 'Charge for order ID: 888',
                'amount': money, // 1,000 Baht
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
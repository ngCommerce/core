import { Injectable } from "@angular/core";
import Omise from 'omise';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OmiseService {
    constructor() {
    }
    checkTokenByCredit(omiseKey, payment) {
        let omise = new Omise(omiseKey);
        let currentstep = null;
        let detailCard = {
            card: {
                name: payment.paymenttype,
                number: payment.creditno,
                expiration_month: payment.expdate.substr(0, 2),
                expiration_year: payment.expdate.substr(3, 5),
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
    paymenyByCredit(omiseKey, id, money) {
        let omise = new Omise(omiseKey);
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
    paymenyByBank(omiseKey, bank, money) {
        let omise = new Omise(omiseKey);
        money = money * 100;
        return new Promise((resolve, reject) => {
            omise.charges.create({
                'description': 'Charge for order ID: 888',
                'amount': money, // 1,000 Baht
                'currency': 'thb',
                "offsite": bank,
                "return_uri": "http://res.cloudinary.com/hzzat7wj2/image/upload/v1508831661/Pmss_new_jrnlia.png"
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
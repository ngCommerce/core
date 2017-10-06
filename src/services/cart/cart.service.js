"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
const core_model_1 = require("../../models/core.model");
const core_service_1 = require("../../core.service");
let CartService = class CartService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
        this._apiURL = apiURL;
    }
    getCartList() {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'carts/', { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createCart(Cart) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'carts/', Cart, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getCartByID(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'carts/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateCart(Cart) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'carts/' + Cart._id, Cart, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteCart(id) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.delete(this._apiURL + 'carts/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getCartByUser(userId) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.get(this._apiURL + 'cartbyuser/' + userId, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    addToCart(product) {
        let cartStorage = window.localStorage.getItem('gCart') ? JSON.parse(window.localStorage.getItem('gCart')) : null;
        if (cartStorage && cartStorage.items.length > 0) {
            for (var i = 0; i < cartStorage.items.length; i++) {
                var item = cartStorage.items[i];
                if (product._id === item.product._id) {
                    item.qty++;
                    item.amount = product.price * item.qty;
                    item.discount = product.promotionprice ? (product.price - product.promotionprice) * item.qty : 0;
                    item.totalamount = item.amount - item.discount;
                    window.localStorage.setItem('gCart', JSON.stringify(cartStorage));
                    this.getCartStorage();
                    return;
                }
            }
        }
        if (!cartStorage) {
            cartStorage = {
                items: []
            };
        }
        cartStorage.items.push({
            product: product,
            qty: 1,
            amount: product.price,
            discount: product.promotionprice ? (product.price - product.promotionprice) : 0,
            totalamount: product.promotionprice
        });
        window.localStorage.setItem('gCart', JSON.stringify(cartStorage));
        this.getCartStorage();
        return;
    }
    getCartStorage() {
        return window.localStorage.getItem('gCart') ? JSON.parse(window.localStorage.getItem('gCart')) : null;
    }
    saveCartStorage(cart) {
        window.localStorage.setItem('gCart', JSON.stringify(cart));
        return;
    }
    onCalculate(cart) {
        cart.amount = 0;
        cart.discount = 0;
        cart.totalamount = 0;
        if (cart && cart.items) {
            for (var i = 0; i < cart.items.length; i++) {
                let item = cart.items[i];
                let promotionprice = item.product.promotionprice ? item.product.promotionprice : 0;
                item.amount = item.product.price * item.qty;
                item.discount = promotionprice > 0 ? (item.product.price - promotionprice) * item.qty : 0;
                item.totalamount = item.amount - item.discount;
                cart.amount += item.amount;
                cart.discount += item.discount;
                cart.totalamount += item.totalamount;
            }
        }
        return cart;
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
};
CartService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_model_1.API_URL)),
    __metadata("design:paramtypes", [String, http_1.Http, core_service_1.CorService])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
let FavoriteService = class FavoriteService {
    constructor(http) {
        this.http = http;
        this.favorite = { items: [] };
    }
    getFavoriteList() {
        return JSON.parse(window.localStorage.getItem('favproduct')) || this.favorite;
    }
    addFavorite(product) {
        this.favorite = JSON.parse(window.localStorage.getItem('favproduct')) || this.favorite;
        this.favorite.items = this.favorite.items ? this.favorite.items : [];
        if (this.favorite.items && this.favorite.items.length > 0) {
            let chkFavorite = this.favorite.items.filter(function (obj) { return obj._id == product._id; });
            if (chkFavorite.length > 0) {
                return this.getFavoriteList();
            }
            else {
                this.favorite.items.push(product);
                window.localStorage.setItem('favproduct', JSON.stringify(this.favorite));
                return this.getFavoriteList();
            }
        }
        else {
            this.favorite.items.push(product);
            window.localStorage.setItem('favproduct', JSON.stringify(this.favorite));
            return this.getFavoriteList();
        }
    }
    removeFavorite(index) {
        this.favorite = JSON.parse(window.localStorage.getItem('favproduct'));
        this.favorite.items.splice(index, 1);
        window.localStorage.setItem('favproduct', JSON.stringify(this.favorite));
        return this.getFavoriteList();
    }
};
FavoriteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FavoriteService);
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=favorite.service.js.map
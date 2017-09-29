import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
export class AuthenService {
    constructor(apiURL, http) {
        this.http = http;
        this._apiURL = apiURL;
    }
    signIn(authen) {
        return this.http.post(this._apiURL + 'auth/signin', authen)
            .toPromise()
            .then(response => {
            let res = response.json();
            window.localStorage.setItem('token', res.loginToken);
            return res;
        })
            .catch(this.handleError);
    }
    signUp(user) {
        return this.http.post(this._apiURL + 'auth/singup', user)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
}
AuthenService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AuthenService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [API_URL,] },] },
    { type: Http, },
];
//# sourceMappingURL=authen.service.js.map
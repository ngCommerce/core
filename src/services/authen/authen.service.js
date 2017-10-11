import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { CorService } from "../../core.service";
export class AuthenService {
    constructor(apiURL, http, corService) {
        this.http = http;
        this.corService = corService;
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
        return this.http.post(this._apiURL + 'auth/signup', user)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateUser(user) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.put(this._apiURL + 'users', user, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    changePassword(password) {
        let headers = this.corService.createAuthorizationHeader();
        return this.http.post(this._apiURL + 'users/password', password, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    pushNotificationUser(notiUserID) {
        return this.http.put(this._apiURL + 'user/notification', notiUserID)
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
    { type: CorService, },
];
//# sourceMappingURL=authen.service.js.map
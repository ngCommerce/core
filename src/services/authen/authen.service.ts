import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { SigninModel, SignupModel, UserModel } from "../../models/authen.model";
import { CorService } from "../../core.service";

@Injectable()
export class AuthenService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http, public corService: CorService) {
        this._apiURL = apiURL;
    }

    signIn(authen): Promise<UserModel> {
        return this.http.post(this._apiURL + 'auth/signin', authen)
            .toPromise()
            .then(response => {
                let res = response.json() as UserModel;
                window.localStorage.setItem('token', res.loginToken);
                return res;
            })
            .catch(this.handleError);
    }

    signUp(user): Promise<UserModel> {
        return this.http.post(this._apiURL + 'auth/signup', user)
            .toPromise()
            .then(response => response.json() as UserModel)
            .catch(this.handleError);
    }

    updateUser(user): Promise<UserModel> {
        return this.http.put(this._apiURL + 'users', user)
            .toPromise()
            .then(response => response.json() as UserModel)
            .catch(this.handleError);
    }

    changePassword(password): Promise<UserModel> {
        let headers = this.corService.createAuthorizationHeader();

        return this.http.post(this._apiURL + 'users/password', password, { headers: headers })
            .toPromise()
            .then(response => response.json() as UserModel)
            .catch(this.handleError);
    }

    pushNotificationUser(notiUserID): Promise<UserModel> {
        return this.http.put(this._apiURL + 'user/notification', notiUserID)
            .toPromise()
            .then(response => response.json() as UserModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
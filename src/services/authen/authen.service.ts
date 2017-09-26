import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../../models/core.model";
import { SigninModel, SignupModel } from "../../models/authen.model";

@Injectable()
export class AuthenService {
    private _apiURL: String;

    constructor( @Inject(API_URL) apiURL: String, public http: Http) {
        this._apiURL = apiURL;
    }

    signIn(authen): Promise<SigninModel> {
        return this.http.post(this._apiURL + 'auth/signin', authen)
            .toPromise()
            .then(response => response.json() as SignupModel)
            .catch(this.handleError);
    }

    signUp(user): Promise<SignupModel> {
        return this.http.post(this._apiURL + 'auth/singup', user)
            .toPromise()
            .then(response => response.json() as SignupModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
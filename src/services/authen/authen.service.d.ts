import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SigninModel, SignupModel } from "../../models/authen.model";
export declare class AuthenService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    signIn(authen: any): Promise<SigninModel>;
    signUp(user: any): Promise<SignupModel>;
    private handleError(error);
}

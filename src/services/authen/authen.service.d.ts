import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserModel } from "../../models/authen.model";
export declare class AuthenService {
    http: Http;
    private _apiURL;
    constructor(apiURL: String, http: Http);
    signIn(authen: any): Promise<UserModel>;
    signUp(user: any): Promise<UserModel>;
    private handleError(error);
}

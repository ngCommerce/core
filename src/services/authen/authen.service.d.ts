import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserModel } from "../../models/authen.model";
import { CorService } from "../../core.service";
export declare class AuthenService {
    http: Http;
    corService: CorService;
    private _apiURL;
    constructor(apiURL: String, http: Http, corService: CorService);
    signIn(authen: any): Promise<UserModel>;
    signUp(user: any): Promise<UserModel>;
    updateUser(user: any): Promise<UserModel>;
    changePassword(password: any): Promise<UserModel>;
    pushNotificationUser(notiUserID: any): Promise<UserModel>;
    private handleError(error);
}

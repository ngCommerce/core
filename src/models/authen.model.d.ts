export interface SigninModel {
    username: string;
    password: string;
}
export interface SignupModel {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    tel: string;
    profileImageURL: string;
}
export interface UserModel {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    profileImageURL: string;
    tel: string;
    loginExpires: string;
    loginToken: string;
    rolse: Array<string>;
    pushnotifications: Array<string>;
}

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
    profileImageURL: string;
}

export interface EditUserModel {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
}

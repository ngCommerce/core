export interface PaymentModel {
    payment: Array<Payment>;
    counterservice: Array<Counter>;
}
export interface Payment {
    name: string;
    image: string;
}
export interface Counter {
    name: string;
    image: string;
}

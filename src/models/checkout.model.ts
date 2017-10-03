import { ProductItemModel } from "./product.model";
export interface CheckoutModel {
    _id: string;
    items: Array<CheckoutItemModel>;
    amount: number;
    discount: number;
    totalamount: number;
};
export interface CheckoutItemModel {
    product: ProductItemModel;
    qty: number;
    amount: number;
    discount: number;
    totalamount: number;
};

export interface ShippingModel {
    _id: string;
    products: Array<PaymentItemModel>;
    amount: number;
};
export interface PaymentItemModel {
    product: ProductItemModel;
    price: number;
    qty: number;
    itemamount: number;
};
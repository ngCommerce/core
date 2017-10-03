import { ProductItemModel } from "./product.model";
export class CheckoutModel {
    _id: string;
    items: Array<CheckoutItemModel>;
    amount: number;
    discount: number;
    totalamount: number;
};
export class CheckoutItemModel {
    product: ProductItemModel;
    qty: number;
    amount: number;
    discount: number;
    totalamount: number;
};
// 

export class ShippingModel {
    _id: string;
    products: Array<PaymentItemModel>;
    amount: number;
};
export class PaymentItemModel {
    product: ProductItemModel;
    price: number;
    qty: number;
    itemamount: number;
};
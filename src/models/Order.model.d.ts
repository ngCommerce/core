import { ProductModel } from "./product.model";
import { DeliveryModel } from "./cart.model";
import { AddressModel } from "./address.model";
export interface OrderModel {
    _id: string;
    shipping: AddressModel;
    items: Array<OrderItemModel>;
    payment: PaymentItemModel;
    amount: number;
    discount: number;
    totalamount: number;
    deliveryprice: number;
    discountcode: string;
    status: string;
}
export interface OrderItemModel {
    _id: string;
    product: ProductModel;
    delivery: DeliveryModel;
    status: string;
    qty: number;
    amount: number;
    discount: number;
    totalamount: number;
    deliveryprice: number;
}
export interface PaymentItemModel {
    paymenttype: string;
    creditno: string;
    creditname: string;
    expdate: string;
    creditcvc: string;
    counterservice: string;
}

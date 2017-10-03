import { ProductModel } from "./product.model";
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

export interface DeliveryModel {
    name: string;
    detail: string;
    price: number;
    duedate: number;
}

export interface PaymentItemModel {
    paymenttype: string;
    creditno: string;
    creditname: string;
    expdate: string;
    creditcvc: string;
    counterservice: string;
}

export interface ItemByOrderByShopModel {
    waiting: Array<ItemByShopModel>;
    accept: Array<ItemByShopModel>;
    sent: Array<ItemByShopModel>;
    return: Array<ItemByShopModel>;
}

export interface ItemByShopModel {
    order_id: string;
    item_id: string;
    name: string;
    price: number;
    qty: number;
    rate: number;
    image: string;
    status: string;
    shipping: AddressModel;
    delivery: DeliveryModel
}
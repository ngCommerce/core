import { ProductModel } from "./product.model";
export interface CartModel {
    _id: string;
    items: Array<CartItemModel>;
    totalPrice: number;
}
export interface CartItemModel {
    _id: string;
    product: ProductModel;
    delivery: DeliveryModel;
    qty: number;
    amount: number;
    discount: number;
    totalamount: number;
    deliveryprice: number;
}
export interface DeliveryModel {
    detail: string;
    name: string;
    price: number;
}

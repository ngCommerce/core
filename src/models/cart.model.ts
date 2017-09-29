import { ProductModel } from "./product.model";

export interface CartModel {
    _id: string;
    items: Array<CartItemModel>;
    amount: number;
    discount: number;
    totalamount: number;
}

export interface CartItemModel {
    _id: string;
    product: ProductModel;
    qty: number;
    amount: number;
    discount: number;
    totalamount: number;
}
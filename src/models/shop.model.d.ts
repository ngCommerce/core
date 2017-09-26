import { ReviewsModel } from './core.model';
export interface ShopListModel {
    title: string;
    items: Array<ItemModel>;
}
export interface ItemModel {
    _id: string;
    image: string;
    name: string;
}
export interface ShopModel {
    _id: string;
    name: string;
    email: string;
    tel: string;
    map: map;
    image: string;
    detail: string;
    reviews: Array<ReviewsModel>;
    rate: number;
}
export interface map {
    lat: string;
    long: string;
}
export interface ProductsModel {
    name: string;
    image: string;
    unitprice: number;
}

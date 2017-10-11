import { ShopModel } from './shop.model';
import { ReviewsModel } from './core.model';
import { CategoryModel } from './category.model';
export interface ProductModel {
    _id: string;
    name: string;
    detail: string;
    price: number;
    promotionprice: number;
    percentofdiscount: number;
    currency: string;
    categories: Array<CategoryModel>;
    images: Array<string>;
    reviews: Array<ReviewsModel>;
    shippings: Array<Shipping>;
    shop: ShopModel;
    cod: Boolean;
    isFavorite: Boolean;
}
export interface Shipping {
    _id: string;
    name: string;
    detail: string;
    dudate: number;
    price: number;
}
export interface ProductListModel {
    title: string;
    items: Array<ProductItemModel>;
}
export interface ProductItemModel {
    _id: string;
    name: string;
    image: string;
    price: number;
    promotionprice: number;
    percentofdiscount: number;
    currency: String;
    rate: number;
}

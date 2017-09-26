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
    questions: Array<QuestionModel>;
    size: ProductDataSize;
    shippings: Array<Shipping>;
    shop: ShopModel;
}
export interface QuestionModel {
    _id: string;
    question: string;
    answer: number;
}
export interface ProductDataSize {
    _id: string;
    detail: string;
    sizedetail: Array<string>;
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

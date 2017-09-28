import { ShopModel } from './shop.model';
import { ReviewsModel } from './core.model';
import { CategoryModel } from './category.model';

export interface ProductModel {
    _id: string;
    name: string;
    detail: string;
    price: number;
    promotionprice: number; //calculate from active promotions
    percentofdiscount: number; //calculate from active promotions
    currency: string;
    categories: Array<CategoryModel>;
    images: Array<string>;
    reviews: Array<ReviewsModel>; // relate of Reviews
    // questions: Array<QuestionModel>; // relate of QA Transactions
    // size: ProductDataSize;
    shippings: Array<Shipping>;
    shop: ShopModel;
    cod: Boolean;
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
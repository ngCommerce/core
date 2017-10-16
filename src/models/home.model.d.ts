import { ShopListModel } from "./shop.model";
import { ProductListModel } from "./product.model";
export interface HomeCategoryModel {
    categories: Array<HomeModel>;
}
export interface HomeModel {
    name: string;
    popularproducts: Array<ProductListModel>;
    bestseller: Array<ProductListModel>;
    popularshops: Array<ShopListModel>;
}
export interface HomeSellerModel {
    items: ItemsHomeSellerModel;
    report: Array<ReportModel>;
}
export interface ItemsHomeSellerModel {
    day: ItemHomeSellerModel;
    month: ItemHomeSellerModel;
    year: ItemHomeSellerModel;
    categories: Array<cateHomeSellerModel>;
}
export interface cateHomeSellerModel {
    cate: string;
}
export interface ItemHomeSellerModel {
    amount: number;
}
export interface ReportModel {
    title: string;
    amount: number;
}

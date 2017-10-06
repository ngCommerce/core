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
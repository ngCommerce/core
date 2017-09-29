export interface FavoriteListModel {
    title: string;
    items: Array<FavoriteItemModel>;
}
export interface FavoriteItemModel {
    _id: string;
    name: string;
    image: string;
    price: number;
    promotionprice: number;
    percentofdiscount: number;
    currency: String;
    rate: number;
}

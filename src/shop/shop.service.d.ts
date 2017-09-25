export declare const API_URL = "";
export declare class ShopService {
    private _apiURL;
    constructor(apiURL: String);
    getShopList(): string;
    createShop(): string;
    updateShopByID(ID: string): string;
    deleteShopByID(ID: string): string;
}

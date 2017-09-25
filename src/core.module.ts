import { ProductService } from './product/product.service';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';
import { CorService, API_URL } from "./core.service";
import { CategoryService } from "./category/category.service";
import { ShopService } from "./shop/shop.service";

import { IonItemCategoryComponent } from "./component/ion-item-category/ion-item-category";
import { IonItemProductComponent } from "./component/ion-item-product/ion-item-product";
import { IonItemShopComponent } from "./component/ion-item-shop/ion-item-shop";
import { IonListCategoryComponent } from "./component/ion-list-category/ion-list-category";
import { IonListProductComponent } from "./component/ion-list-product/ion-list-product";
import { IonListShopComponent } from "./component/ion-list-shop/ion-list-shop";

@NgModule()
export class EcommerceCoreModule {

    /**
     * Provide the apiURL.
     * @param apiURL for service http.
     * 
     */
    static forRoot(apiURL: String = ""): ModuleWithProviders {
        console.log('in EcommerceCoreModule');
        return {
            ngModule: EcommerceCoreModule,
            providers: [
                CorService,
                CategoryService,
                ShopService,
                ProductService,
                HttpModule,

                IonItemCategoryComponent,
                IonItemProductComponent,
                IonItemShopComponent,
                IonListCategoryComponent,
                IonListProductComponent,
                IonListShopComponent,
                { provide: API_URL, useValue: apiURL },
            ],
        };
    }
}
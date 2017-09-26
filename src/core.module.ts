import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';

import { API_URL } from "./models/core.model";
import { CorService } from "./core.service";
import { CategoryService } from "./services/category/category.service";
import { ShopService } from "./services/shop/shop.service";
import { ProductService } from './services/product/product.service';

import { IonListCategoryComponent } from "./components/ion-list-category/ion-list-category";
import { IonListShopComponent } from "./components/ion-list-shop/ion-list-shop";
import { IonListProductComponent } from "./components/ion-list-product/ion-list-product";
import { IonFormShopComponent } from "./components/ion-form-shop/ion-form-shop";
import { IonListXProductComponent } from "./components/ion-list-Xproduct/ion-list-x-product";
import { IonFormCategoryComponent } from "./components/ion-form-category/ion-form-category";

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
                // HttpModule,

                // IonItemCategoryComponent,
                // IonItemProductComponent,
                // IonItemShopComponent,
                // IonListCategoryComponent,
                // IonListProductComponent,
                // IonListShopComponent,
                { provide: API_URL, useValue: apiURL },
            ],
        };
    }
}
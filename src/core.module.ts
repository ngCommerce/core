import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';

import { API_URL } from "./models/core.model";
import { CorService} from "./core.service";
import { CategoryService } from "./services/category/category.service";
import { ShopService } from "./services/shop/shop.service";
import { ProductService } from './services/product/product.service';

import { IonItemCategoryComponent } from "./components/ion-item-category/ion-item-category";
import { IonItemProductComponent } from "./components/ion-item-product/ion-item-product";
import { IonItemShopComponent } from "./components/ion-item-shop/ion-item-shop";
import { IonListCategoryComponent } from "./components/ion-list-category/ion-list-category";
import { IonListProductComponent } from "./components/ion-list-product/ion-list-product";
import { IonListShopComponent } from "./components/ion-list-shop/ion-list-shop";

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
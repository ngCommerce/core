import { NgModule, ModuleWithProviders } from "@angular/core";
import { CorService, API_URL } from "./core.service";
import { CategoryService } from "./category/category.service";
import { ShopService } from "./shop/shop.service";

@NgModule()
export class EcommerceCoreModule {

    /**
     * Provide the apiURL.
     * @param apiURL for service http.
     */
    static forRoot(apiURL: String = ""): ModuleWithProviders {
        console.log('in EcommerceCoreModule');
        return {
            ngModule: EcommerceCoreModule,
            providers: [
                CorService,
                CategoryService,
                ShopService,
                { provide: API_URL, useValue: apiURL }
            ]
        };
    }
}
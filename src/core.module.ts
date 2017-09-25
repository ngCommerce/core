import { NgModule, ModuleWithProviders } from "@angular/core";
import { CorService, API_URL } from "./core.service";
import { CategoryService } from "./category/category.service";

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
                { provide: API_URL, useValue: apiURL }
            ]
        };
    }
}
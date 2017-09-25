import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';
import { CorService, API_URL } from "./core.service";
import { CategoryService } from "./category/category.service";
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
                HttpModule,
                { provide: API_URL, useValue: apiURL },
            ],
        };
    }
}
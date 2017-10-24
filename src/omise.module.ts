import { AuthenService } from './services/authen/authen.service';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';
import { OmiseService } from "../src/services/omise/omise.service";
import { CorService } from "./core.service";
import { OmiseKey } from "./models/core.model";


@NgModule()
export class EcommerceOmiseModule {

    /**
     * Provide the apiURL.
     * @param apiURL for service http.
     * 
     */
    static forRoot(omiseKey: String = ""): ModuleWithProviders {
        console.log('in EcommerceOmiseModule');
        return {
            ngModule: EcommerceOmiseModule,
            providers: [
                OmiseService,
                CorService,
                { provide: OmiseKey, useValue: omiseKey },
            ],
        };
    }
}
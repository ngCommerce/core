import { HttpModule } from '@angular/http';
import { ProductService } from './../../src/product/product.service';
import { TestBed, inject } from "@angular/core/testing";
import { EcommerceCoreModule } from "../../src/core.module";
import { CorService } from "../../src/core.service";


describe('Core service', () => {

    describe('EcommerceCoreModule set forRoot with api url', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({ imports: [HttpModule, EcommerceCoreModule.forRoot('api/test')] });
        });

        it('should not call anything', (inject([ProductService], (service: ProductService) => {
            // expect(service.apiURL).toEqual("api/test");
            expect(service.getProductList()).not.toBeNull();
        })));
    });
});
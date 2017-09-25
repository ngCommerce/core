import { TestBed, inject } from "@angular/core/testing";
import { EcommerceCoreModule } from "../../src/core.module";
import { ShopService } from "../../src/shop/shop.service";
import { HttpModule } from "@angular/http";


describe('Core service', () => {

    describe('EcommerceCoreModule set forRoot with api url', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({ imports: [HttpModule, EcommerceCoreModule.forRoot('api/test')] });
        });

        it('should get shop list', (inject([ShopService], (service: ShopService) => {
            // expect(service.getShopList()).toEqual("api/test/shops");
            expect(service.getShopList()).not.toBeNull();            
        })));
    });
});
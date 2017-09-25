import { TestBed, inject } from "@angular/core/testing";
import { EcommerceCoreModule } from "../src/core.module";
import { ShopService } from "../src/shop/shop.service";


describe('Core service', () => {

    describe('EcommerceCoreModule set forRoot with api url', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({ imports: [EcommerceCoreModule.forRoot('api/test')] });
        });

        it('should create shop', (inject([ShopService], (service: ShopService) => {
            expect(service.createShop).toEqual("api/test/shops");
        })));

        it('should get shop list', (inject([ShopService], (service: ShopService) => {
            expect(service.getShopList).toEqual("api/test/shops");
        })));

        it('should update shop', (inject([ShopService], (service: ShopService) => {
            expect(service.updateShopByID('1234567')).toEqual("api/test/shops/1234567");
        })));

        it('should delete shop by ID', (inject([ShopService], (service: ShopService) => {
            expect(service.deleteShopByID('1234567')).toEqual("api/test/shops/1234567");
        })));
    });
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const core_module_1 = require("../../src/core.module");
const shop_service_1 = require("../../src/services/shop/shop.service");
const http_1 = require("@angular/http");
describe('Core service', () => {
    describe('EcommerceCoreModule set forRoot with api url', () => {
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({ imports: [http_1.HttpModule, core_module_1.EcommerceCoreModule.forRoot('api/test')] });
        });
        it('should get shop list', (testing_1.inject([shop_service_1.ShopService], (service) => {
            // expect(service.getShopList()).toEqual("api/test/shops");
            expect(service.getShopList()).not.toBeNull();
        })));
    });
});
//# sourceMappingURL=shop.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_module_1 = require("../../src/core.module");
var shop_service_1 = require("../../src/shop/shop.service");
var http_1 = require("@angular/http");
describe('Core service', function () {
    describe('EcommerceCoreModule set forRoot with api url', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({ imports: [http_1.HttpModule, core_module_1.EcommerceCoreModule.forRoot('api/test')] });
        });
        it('should get shop list', (testing_1.inject([shop_service_1.ShopService], function (service) {
            // expect(service.getShopList()).toEqual("api/test/shops");
            expect(service.getShopList()).not.toBeNull();
        })));
    });
});
//# sourceMappingURL=shop.spec.js.map
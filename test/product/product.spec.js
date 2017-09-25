"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var product_service_1 = require("./../../src/product/product.service");
var testing_1 = require("@angular/core/testing");
var core_module_1 = require("../../src/core.module");
describe('Core service', function () {
    describe('EcommerceCoreModule set forRoot with api url', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({ imports: [http_1.HttpModule, core_module_1.EcommerceCoreModule.forRoot('api/test')] });
        });
        it('should not call anything', (testing_1.inject([product_service_1.ProductService], function (service) {
            // expect(service.apiURL).toEqual("api/test");
            expect(service.getCategoryList()).not.toBeNull();
        })));
    });
});
//# sourceMappingURL=product.spec.js.map
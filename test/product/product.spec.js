"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@angular/http");
const product_service_1 = require("../../src/services/product/product.service");
const testing_1 = require("@angular/core/testing");
const core_module_1 = require("../../src/core.module");
describe('Core service', () => {
    describe('EcommerceCoreModule set forRoot with api url', () => {
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({ imports: [http_1.HttpModule, core_module_1.EcommerceCoreModule.forRoot('api/test')] });
        });
        it('should not call anything', (testing_1.inject([product_service_1.ProductService], (service) => {
            // expect(service.apiURL).toEqual("api/test");
            expect(service.getProductList()).not.toBeNull();
        })));
    });
});
//# sourceMappingURL=product.spec.js.map
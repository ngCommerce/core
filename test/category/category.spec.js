"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const core_module_1 = require("../../src/core.module");
const category_service_1 = require("../../src/services/category/category.service");
const http_1 = require("@angular/http");
describe('Category service', () => {
    describe('Category set forRoot with api url', () => {
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({ imports: [http_1.HttpModule, core_module_1.EcommerceCoreModule.forRoot('https://ngcommerce-server.herokuapp.com/api/')] });
        });
        it('Get Category list', (testing_1.inject([category_service_1.CategoryService], (service) => {
            expect(service.getCategoryList()).not.toBeNull();
            //expect(null).toBeNull();
        })));
    });
});
//# sourceMappingURL=category.spec.js.map
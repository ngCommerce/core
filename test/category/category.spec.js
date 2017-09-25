"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_module_1 = require("../../src/core.module");
var category_service_1 = require("../../src/category/category.service");
var http_1 = require("@angular/http");
describe('Category service', function () {
    describe('Category set forRoot with api url', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({ imports: [http_1.HttpModule, core_module_1.EcommerceCoreModule.forRoot('http://localhost/api/')] });
        });
        it('Get Category list', (testing_1.inject([category_service_1.CategoryService], function (service) {
            // expect(service.getCategoryList()).toEqual('http://localhost/api/');
            expect(service.getCategoryList()).not.toBeNull();
        })));
    });
});
//# sourceMappingURL=category.spec.js.map
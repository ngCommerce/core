"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_module_1 = require("../../src/core.module");
var category_service_1 = require("../../src/category/category.service");
describe('Core service', function () {
    describe('EcommerceCoreModule set forRoot with api url', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({ imports: [core_module_1.EcommerceCoreModule.forRoot('http://localhost/api/')] });
        });
        it('should not call anything', (testing_1.inject([category_service_1.CategoryService], function (service) {
            expect(service.getCategoryList()).toEqual('http://localhost/api/categories');
        })));
    });
});
//# sourceMappingURL=category.spec.js.map
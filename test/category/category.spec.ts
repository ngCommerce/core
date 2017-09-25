import { TestBed, inject } from "@angular/core/testing";
import { EcommerceCoreModule } from "../../src/core.module";
import { CategoryService } from "../../src/category/category.service";


describe('Core service', () => {

    describe('EcommerceCoreModule set forRoot with api url', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({ imports: [EcommerceCoreModule.forRoot('http://localhost/api/')] });
        });

        it('should not call anything', (inject([CategoryService], (service: CategoryService) => {
            expect(service.getCategoryList()).toEqual('http://localhost/api/categories');
        })));
    });
});
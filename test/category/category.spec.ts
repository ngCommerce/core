import { TestBed, inject } from "@angular/core/testing";
import { EcommerceCoreModule } from "../../src/core.module";
import { CategoryService } from "../../src/category/category.service";
import { HttpModule } from "@angular/http";


describe('Category service', () => {

    describe('Category set forRoot with api url', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({ imports: [HttpModule, EcommerceCoreModule.forRoot('http://localhost/api/')] });
        });

        it('Get Category list', (inject([CategoryService], (service: CategoryService) => {

            // expect(service.getCategoryList()).toEqual('http://localhost/api/');
            expect(service.getCategoryList()).not.toBeNull();
        })));
    });
});
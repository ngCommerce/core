import { TestBed, inject } from "@angular/core/testing";
import { EcommerceCoreModule } from "../../src/core.module";
import { CategoryService } from "../../src/services/category/category.service";
import { HttpModule } from "@angular/http";


describe('Category service', () => {

    describe('Category set forRoot with api url', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({ imports: [HttpModule, EcommerceCoreModule.forRoot('https://ngcommerce-server.herokuapp.com/api/')] });
        });

        it('Get Category list', (inject([CategoryService], (service: CategoryService) => {
            expect(service.getCategoryList('token')).not.toBeNull();
            //expect(null).toBeNull();
        })));

        it('Create Category', (inject([CategoryService], (service: CategoryService) => {
            var category = {
                name: "Angular 4 test spec"
            }
            expect(service.createCategory(category, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNlY3JldCIsImlhdCI6MTUwNjU3MDE3NH0.r4Y4e7BTcyzCbZoCvNfJfTUbXoInxpcnnLOHIbGPYHw')).not.toBeNull();
        })));
    });
});
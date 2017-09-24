import {TestBed, inject} from "@angular/core/testing";
import {EcommerceCoreModule} from "../src/core.module";
import {CorService} from "../src/core.service";


describe('Core service', () => {

    describe('EcommerceCoreModule set forRoot with api url', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({imports: [EcommerceCoreModule.forRoot('api/test')]});
        });

        it('should not call anything', (inject([CorService], (service: CorService) => {
            expect(service.apiURL).toEqual("api/test");
        })));
    });
});
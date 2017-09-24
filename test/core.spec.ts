import {CorService} from "../src/core.service";
import {TestBed, inject} from "@angular/core/testing";
import {EcommerceCoreModule} from "../src/core.module";

describe('Core service', () => {

    describe('First Step', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({imports: [EcommerceCoreModule.forRoot('api/test')]});
        });

        it('should not call anything', (inject([CorService], (service: CorService) => {
            //expect(service.apiURL).toEqual(service.apiURL);
            expect(null).toBeNull();
        })));
    });
});
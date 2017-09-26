import { AuthenService } from './../../src/services/authen/authen.service';
import { TestBed, inject } from "@angular/core/testing";
import { EcommerceCoreModule } from "../../src/core.module";
import { HttpModule } from "@angular/http";


describe('Authen service', () => {

    describe('Authen set forRoot with api url', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({ imports: [HttpModule, EcommerceCoreModule.forRoot('http://greenvintage-v1.herokuapp.com/api/')] });
        });

        it('Authen signIn', (inject([AuthenService], (service: AuthenService) => {
            let user = {
                username: 'Bu4y',
                password: 'P@ssw0rd1234'
            };
            expect(service.signIn(user)).not.toBeNull();
            //expect(null).toBeNull();
        })));
    });
});
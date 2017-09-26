"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authen_service_1 = require("./../../src/services/authen/authen.service");
const testing_1 = require("@angular/core/testing");
const core_module_1 = require("../../src/core.module");
const http_1 = require("@angular/http");
describe('Authen service', () => {
    describe('Authen set forRoot with api url', () => {
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({ imports: [http_1.HttpModule, core_module_1.EcommerceCoreModule.forRoot('http://greenvintage-v1.herokuapp.com/api/')] });
        });
        it('Authen signIn', (testing_1.inject([authen_service_1.AuthenService], (service) => {
            let user = {
                username: 'Bu4y',
                password: 'P@ssw0rd1234'
            };
            expect(service.signIn(user)).not.toBeNull();
            //expect(null).toBeNull();
        })));
    });
});
//# sourceMappingURL=authen.spec.js.map
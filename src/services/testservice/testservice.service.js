import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export class testService {
    constructor(http) {
        this.http = http;
    }
}
testService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
testService.ctorParameters = () => [
    { type: Http, },
];
//# sourceMappingURL=testservice.service.js.map
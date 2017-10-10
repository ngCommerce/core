import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export class UploadImageService {
    constructor(http) {
        this.http = http;
    }
    uploadImages(images) {
        return this.http.post('https://cloudinary01.herokuapp.com/api/upload-images', { imgs: images })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
UploadImageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UploadImageService.ctorParameters = () => [
    { type: Http, },
];
//# sourceMappingURL=uploadimage.service.js.map
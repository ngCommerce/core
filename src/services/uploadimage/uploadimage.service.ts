import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { imagesModel } from './../../models/uploadimage.model';


@Injectable()
export class UploadImageService {
    private _apiURL: String;

    constructor(public http: Http) {

    }
    uploadImages(images): Promise<imagesModel[]> {
        return this.http.post('https://cloudinary01.herokuapp.com/api/upload-images', { imgs: images })
            .toPromise()
            .then(response => response.json() as imagesModel[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
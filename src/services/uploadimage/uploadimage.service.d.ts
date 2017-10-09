import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { imagesModel } from './../../models/uploadimage.model';
export declare class UploadImageService {
    http: Http;
    private _apiURL;
    constructor(http: Http);
    uploadImages(images: any): Promise<imagesModel[]>;
    private handleError(error);
}

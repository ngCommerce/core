import { EventEmitter } from '@angular/core';
import { ImagePicker } from "@ionic-native/image-picker";
import { Base64 } from "@ionic-native/base64";
import { UploadImageService } from './../../services/uploadimage/uploadimage.service';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonUploadImageComponent {
    uploadXServiceProvider: UploadImageService;
    imagePicker: ImagePicker;
    base64: Base64;
    items: Array<any>;
    imageList: Array<any>;
    allowUpload: number;
    maxImage: number;
    imageOutList: EventEmitter<any>;
    constructor(uploadXServiceProvider: UploadImageService, imagePicker: ImagePicker, base64: Base64);
    uploadImage(): void;
    selectImage(): void;
    convertImgUrlToBase64(imgUrl: any): void;
    deleteImage(imgID: any): void;
}

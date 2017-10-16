import { EventEmitter } from '@angular/core';
import { ImagePicker } from "@ionic-native/image-picker";
import { Base64 } from "@ionic-native/base64";
import { UploadImageService } from './../../services/uploadimage/uploadimage.service';
import { LoadingController } from 'ionic-angular';
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
    loadingCtrl: LoadingController;
    imageList: Array<any>;
    allowUpload: number;
    maxImage: number;
    editImg: any;
    imageOutList: EventEmitter<any>;
    constructor(uploadXServiceProvider: UploadImageService, imagePicker: ImagePicker, base64: Base64, loadingCtrl: LoadingController);
    uploadImage(): void;
    selectImage(): void;
    convertImgUrlToBase64(imgUrl: any): void;
    deleteImage(imgID: any): void;
}

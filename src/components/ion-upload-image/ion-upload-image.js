import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class IonUploadImageComponent {
    constructor(uploadXServiceProvider, imagePicker, base64, loadingCtrl) {
        // if (this.editImg) {
        //     alert(JSON.stringify(this.editImg));
        //     for (let i = 0; i < this.editImg.length; i++) {
        //         this.imageList.push({
        //             imgUrl: this.editImg[i]
        //         });
        //     }
        // } else {
        //     alert('no img');
        // }
        this.uploadXServiceProvider = uploadXServiceProvider;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.loadingCtrl = loadingCtrl;
        this.imageList = [];
        this.allowUpload = 0;
        this.editImg = [];
        this.imageOutList = new EventEmitter();
    }
    uploadImage() {
        let loading = this.loadingCtrl.create();
        loading.present();
        let items = [];
        this.uploadXServiceProvider.uploadImages(this.imageList).then(data => {
            data.forEach(function (img) {
                items.push(img.imgURL);
            });
            this.imageOutList.emit(items);
            this.allowUpload = 0;
            alert('อัพโหลดสำเร็จ');
            loading.dismiss();
        }).catch(err => {
            alert(err);
        });
    }
    selectImage() {
        if (this.imageList.length < this.maxImage) {
            let options = {
                maximumImagesCount: this.maxImage,
                width: 1080,
                height: 1080,
                quality: 80
            };
            if (this.imagePicker.hasReadPermission()) {
                this.imagePicker.getPictures(options).then((results) => {
                    if (results.length > 0 && (this.imageList.length + results.length) <= this.maxImage) {
                        this.convertImgUrlToBase64(results);
                    }
                    else {
                        alert(`คุณเลือกรูปเกินกำหนด`);
                    }
                }, (err) => {
                    alert('Message ERROR Get Pictures' + err);
                });
            }
            else {
                this.imagePicker.requestReadPermission().then(() => {
                    this.imagePicker.getPictures(options).then((results) => {
                        if (results.length > 0 && (this.imageList.length + results.length) <= this.maxImage) {
                            this.convertImgUrlToBase64(results);
                        }
                        else {
                            alert(`คุณเลือกรูปเกินกำหนด`);
                        }
                    }, (err) => {
                        alert('Message ERROR Get Pictures' + err);
                    });
                }, (err) => {
                    alert('Message ERROR Request Read Permission' + err);
                });
            }
        }
        else {
            alert(`คุณเลือกรูปครบ ${this.maxImage} รูปแล้ว`);
        }
    }
    convertImgUrlToBase64(imgUrl) {
        for (let i = 0; i < imgUrl.length; i++) {
            this.base64.encodeFile(imgUrl[i]).then((base64File) => {
                let base64img = base64File.replace(/\n/g, '');
                base64img = base64File.replace('data:image/*;charset=utf-8;base64,', 'data:image/jpg;base64,');
                let id = new Date();
                this.imageList.push({
                    id: id,
                    imgUrl: imgUrl[i],
                    base64: base64img
                });
                this.allowUpload = this.imageList.length;
            }, (err) => { });
        }
    }
    deleteImage(imgID) {
        for (let i = 0; i < this.imageList.length; i++) {
            if (this.imageList[i].id == imgID) {
                this.imageList.splice(i, 1);
                break;
            }
        }
        this.allowUpload = this.imageList.length;
    }
}
IonUploadImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-upload-image',
                template: `
    <div *ngIf="editImg.length > 0">
    <ion-row class="categories-row">
      <ion-col width-30 class="horizontal-item" *ngFor="let data of imageList">
        <img src="{{data.imgUrl}}">
        <span id="imageTrash" class="trash" (click)="deleteImage(data.id)"><ion-icon name="trash"></ion-icon></span>
      </ion-col>
    </ion-row>
    <ion-row>
        <ion-col class="right ion-icon-cust">
            <ion-icon name="md-image" (click)="selectImage()" *ngIf="imageList.length < maxImage"></ion-icon>
            <ion-icon name="md-cloud-upload" (click)="uploadImage()" *ngIf="allowUpload > 0"></ion-icon>
        </ion-col>
    </ion-row>
    </div>
    `,
                styles: [`
  ion-upload-image {
    
  }`
                ]
            },] },
];
/** @nocollapse */
IonUploadImageComponent.ctorParameters = () => [
    { type: UploadImageService, },
    { type: ImagePicker, },
    { type: Base64, },
    { type: LoadingController, },
];
IonUploadImageComponent.propDecorators = {
    'maxImage': [{ type: Input },],
    'editImg': [{ type: Input },],
    'imageOutList': [{ type: Output },],
};
//# sourceMappingURL=ion-upload-image.js.map
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImagePicker } from "@ionic-native/image-picker";
import { Base64 } from "@ionic-native/base64";
import { UploadImageService } from './../../services/uploadimage/uploadimage.service';

/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ion-upload-image',
    template: `
    <ion-scroll scrollX="true">
    <ion-row>
      <ion-col width-30  *ngFor="let data of imageList">
        <img src="{{data.imgUrl}}">
        <span (click)="deleteImage(data.id)"><ion-icon name="trash"></ion-icon></span>
      </ion-col>
    </ion-row>
  </ion-scroll>
  <ion-row>
    <ion-col>
      <ion-icon name="md-image" (click)="selectImage()" *ngIf="imageList.length < maxImage"></ion-icon>
      <ion-icon name="md-cloud-upload" (click)="uploadImage()" *ngIf="allowUpload > 0"></ion-icon>
    </ion-col>
  </ion-row>
    `,
    styles: [`
  ion-upload-image {
    
  }`
    ]
})
export class IonUploadImageComponent {
    items: Array<any> = [];
    public imageList: Array<any> = [];
    public allowUpload: number = 0;
    @Input() maxImage: number;
    @Output() imageOutList: EventEmitter<any> = new EventEmitter<any>();

    constructor(public uploadXServiceProvider: UploadImageService, public imagePicker: ImagePicker, public base64: Base64) {

    }
    uploadImage() {
        this.uploadXServiceProvider.uploadImages(this.imageList).then(data => {
            data.forEach(function (img) {
                this.items.push(img.imgURL);
            });
            this.imageOutList.emit(this.items);
            this.allowUpload = 0;
            alert('อัพโหลดสำเร็จ');
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
                    } else {
                        alert(`คุณเลือกรูปเกินกำหนด`);
                    }
                }, (err) => {
                    alert('Message ERROR Get Pictures' + err);
                });
            } else {
                this.imagePicker.requestReadPermission().then(() => {
                    this.imagePicker.getPictures(options).then((results) => {
                        if (results.length > 0 && (this.imageList.length + results.length) <= this.maxImage) {
                            this.convertImgUrlToBase64(results);
                        } else {
                            alert(`คุณเลือกรูปเกินกำหนด`);
                        }
                    }, (err) => {
                        alert('Message ERROR Get Pictures' + err);
                    });

                }, (err) => {
                    alert('Message ERROR Request Read Permission' + err);
                });
            }
        } else {
            alert(`คุณเลือกรูปครบ ${this.maxImage} รูปแล้ว`);
        }
    }

    convertImgUrlToBase64(imgUrl: any) {
        for (let i = 0; i < imgUrl.length; i++) {
            this.base64.encodeFile(imgUrl[i]).then((base64File: string) => {
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

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const image_picker_1 = require("@ionic-native/image-picker");
const base64_1 = require("@ionic-native/base64");
const uploadimage_service_1 = require("./../../services/uploadimage/uploadimage.service");
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let IonUploadImageComponent = class IonUploadImageComponent {
    constructor(uploadXServiceProvider, imagePicker, base64) {
        this.uploadXServiceProvider = uploadXServiceProvider;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.items = [];
        this.imageList = [];
        this.allowUpload = 0;
        this.imageOutList = new core_1.EventEmitter();
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
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], IonUploadImageComponent.prototype, "maxImage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonUploadImageComponent.prototype, "imageOutList", void 0);
IonUploadImageComponent = __decorate([
    core_1.Component({
        selector: 'ion-segment-order',
        template: `
    <ion-scroll scrollX="true" class="horizontal-categories">
    <ion-row class="categories-row">
      <ion-col width-30 class="horizontal-item" *ngFor="let data of imageList">
        <preload-image [ratio]="{w:4, h:4}" [src]="data.imgUrl"></preload-image>
        <span class="trash" (click)="deleteImage(data.id)"><ion-icon name="trash"></ion-icon></span>
      </ion-col>
    </ion-row>
  </ion-scroll>
  <ion-row>
    <ion-col class="right ion-icon-cust">
      <ion-icon name="md-image" (click)="selectImage()" *ngIf="imageList.length < maxImage"></ion-icon>
      <ion-icon name="md-cloud-upload" (click)="uploadImage()" *ngIf="allowUpload > 0"></ion-icon>
    </ion-col>
  </ion-row>
    `,
        styles: [`
  ion-segment-order {
    
  }`
        ]
    }),
    __metadata("design:paramtypes", [uploadimage_service_1.UploadImageService, image_picker_1.ImagePicker, base64_1.Base64])
], IonUploadImageComponent);
exports.IonUploadImageComponent = IonUploadImageComponent;
//# sourceMappingURL=ion-upload-image.js.map
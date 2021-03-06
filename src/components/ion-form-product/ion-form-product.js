import { Component, Output, EventEmitter, Input } from "@angular/core";
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonFormProductComponent {
    constructor() {
        this.item = {};
        this.itemClicked = new EventEmitter();
        this.cancelCreate = new EventEmitter();
        // console.log('Hello IonListCategoryComponent Component');
        // this.item.shop = this.shops.length > 0 ? this.shops[0] : '';
        // console.log(this.item);
        this.item.price = 0;
        this.item.promotionprice = 0;
        this.item.percentofdiscount = 0;
    }
    checkedShop() {
        return true;
    }
    onClick(item) {
        if (!item.name) {
            alert("Please Enter Your Name!");
            return;
        }
        else if (!item.detail) {
            alert("Please Enter Your Detail!");
            return;
        }
        else if (!item.price) {
            alert("Please Enter Your Price!");
            return;
        }
        else if (!item.currency) {
            alert("Please Enter Your Currency!");
            return;
        }
        else if (!item.shippings) {
            alert("Please Enter Your Shippings!");
            return;
        }
        else if (!item.categories) {
            alert("Please Enter Your Categories!");
            return;
        }
        else if (!item.shop) {
            alert("Please Enter Your Shop!");
            return;
        }
        else if (!this.item.images && this.item.images.length === 0) {
            alert("Please Enter Your Upload Image!");
            return;
        }
        this.itemClicked.emit(item);
    }
    imageList(e) {
        this.item.images = e;
    }
    // toFixedNum(numbe, field) {
    //   let num = parseFloat(numbe);
    //   if (field.toString() === 'price') {
    //     this.item.price = parseFloat(num.toFixed(2));
    //   } else if (field.toString() === 'promotionprice') {
    //     this.item.promotionprice = parseFloat(num.toFixed(2));
    //   } else if (field.toString() === 'percentofdiscount') {
    //     this.item.percentofdiscount = parseFloat(num.toFixed(2));
    //   }
    // }
    toFixedNum(numbe, field) {
        if (numbe && numbe !== null) {
            let num = numbe.toString();
            if (field.toString() === "price") {
                let numSplit = num.split(".");
                if (numSplit && numSplit.length > 1) {
                    let concatNum = numSplit[0] + "." + numSplit[1].substr(0, 2);
                    this.item.price = parseFloat(concatNum);
                }
                else {
                    this.item.price = parseFloat(numSplit);
                }
            }
            else if (field.toString() === "promotionprice") {
                let numSplit = num.split(".");
                if (numSplit && numSplit.length > 1) {
                    let concatNum = numSplit[0] + "." + numSplit[1].substr(0, 2);
                    this.item.promotionprice = parseFloat(concatNum);
                }
                else {
                    this.item.promotionprice = parseFloat(numSplit);
                }
            }
            else if (field.toString() === "percentofdiscount") {
                let numSplit = num.split(".");
                if (numSplit && numSplit.length > 1) {
                    let concatNum = numSplit[0] + "." + numSplit[1].substr(0, 2);
                    this.item.percentofdiscount = parseFloat(concatNum);
                }
                else {
                    this.item.percentofdiscount = parseFloat(numSplit);
                }
            }
        }
    }
    discountpromotion() {
        if (this.item.price > 0) {
            if (this.item.promotionprice > 0) {
                if (this.item.price - this.item.promotionprice >= 0) {
                    let per = this.item.promotionprice / this.item.price * 100;
                    let num = (100 - per).toString();
                    let numSplit = num.split(".");
                    if (numSplit && numSplit.length > 1) {
                        let concatNum = numSplit[0] + "." + numSplit[1].substr(0, 2);
                        this.item.percentofdiscount = parseFloat(concatNum);
                    }
                    else {
                        this.item.percentofdiscount = parseFloat(num);
                    }
                    // this.item.percentofdiscount = parseFloat((100 - per).toFixed(2));
                }
                else {
                    alert("ส่วนลดมากกว่าราคาขายจริง");
                    this.item.percentofdiscount = null;
                    this.item.promotionprice = null;
                }
            }
            else {
                this.item.promotionprice = null;
                this.item.percentofdiscount = null;
            }
        }
        else {
            this.item.promotionprice = null;
            this.item.percentofdiscount = null;
        }
    }
    discountpercent() {
        if (this.item.price > 0) {
            if (this.item.percentofdiscount > 0) {
                if (this.item.percentofdiscount <= 100) {
                    let pro = this.item.percentofdiscount * this.item.price / 100;
                    let proFix = this.item.price - pro;
                    let num = (proFix).toString();
                    let numSplit = num.split(".");
                    if (numSplit && numSplit.length > 1) {
                        let concatNum = numSplit[0] + "." + numSplit[1].substr(0, 2);
                        this.item.promotionprice = parseFloat(concatNum);
                    }
                    else {
                        this.item.promotionprice = parseFloat(num);
                    }
                    // this.item.promotionprice = parseFloat((this.item.price - pro).toFixed(2));
                }
                else {
                    alert("มากกว่า 100 เปอร์เซ็นต์");
                    this.item.promotionprice = null;
                    this.item.percentofdiscount = null;
                }
            }
            else {
                this.item.promotionprice = null;
                this.item.percentofdiscount = null;
            }
        }
        else {
            this.item.promotionprice = null;
            this.item.percentofdiscount = null;
        }
    }
    canceldissmis() {
        this.cancelCreate.emit("cancelCreate");
    }
    discountprice() {
        if (this.item.price > 0) {
            this.item.promotionprice = null;
            this.item.percentofdiscount = null;
        }
    }
    chkNumber(num, field) {
        let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let status = false;
        if (num !== null) {
            let numID = num.toString();
            nums.forEach(function (num) {
                if (numID.length > 1) {
                    if (numID.substr(numID.length - 1) === num) {
                        status = true;
                    }
                }
                else {
                    if (numID === num) {
                        status = true;
                    }
                }
            });
            if (!status) {
                if (field.toString() === "price") {
                    this.item.price = parseFloat(this.item.price
                        .toString()
                        .slice(0, this.item.price.toString().length - 1));
                }
                else if (field.toString() === "promotionprice") {
                    this.item.promotionprice = parseFloat(this.item.promotionprice
                        .toString()
                        .slice(0, this.item.promotionprice.toString().length - 1));
                }
                else if (field.toString() === "percentofdiscount") {
                    this.item.percentofdiscount = parseFloat(this.item.percentofdiscount
                        .toString()
                        .slice(0, this.item.percentofdiscount.toString().length - 1));
                }
            }
        }
        else {
            if (field.toString() === "price") {
                this.item.price = null;
            }
            else if (field.toString() === "promotionprice") {
                this.item.promotionprice = null;
            }
            else if (field.toString() === "percentofdiscount") {
                this.item.percentofdiscount = null;
            }
        }
    }
}
IonFormProductComponent.decorators = [
    { type: Component, args: [{
                selector: "ion-form-product",
                template: `
    <ion-list>
      <ion-item>
        <ion-label floating>Name*</ion-label>
        <ion-input type="text" [(ngModel)]="item.name"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Detail*</ion-label>
        <ion-input type="text" [(ngModel)]="item.detail"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Price*</ion-label>
        <ion-input type="number" [(ngModel)]="item.price" (ngModelChange)="discountprice();chkNumber(item.price,'price');toFixedNum(item.price,'price');"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Promotion Price</ion-label>
        <ion-input type="number" [(ngModel)]="item.promotionprice" (ngModelChange)="discountpromotion();chkNumber(item.promotionprice,'promotionprice');toFixedNum(item.promotionprice,'promotionprice');"></ion-input>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Percent of discount</ion-label>
        <ion-input type="number" [(ngModel)]="item.percentofdiscount" (ngModelChange)="discountpercent();chkNumber(item.percentofdiscount,'percentofdiscount');toFixedNum(item.percentofdiscount,'percentofdiscount');"></ion-input>
      </ion-item>
    

    <ion-item *ngIf="!item.currency">
    <ion-label floating>Currency*</ion-label>
    <ion-select [(ngModel)]="item.currency">
      <ion-option *ngFor="let items of currency" [value]="items.name">{{items.name}}</ion-option>
      </ion-select>
  </ion-item>

  <ion-item *ngIf="item.currency">
  <ion-label floating>Currency*</ion-label>
  <ion-select [(ngModel)]="item.currency">
    <ion-option *ngFor="let items of currency" [value]="items.name">{{items.name}}</ion-option>
    </ion-select>
</ion-item>

      <ion-item>
        <ion-label floating>Categories*</ion-label>
        <ion-select [(ngModel)]="item.categories" multiple="true">
          <ion-option *ngFor="let items of categories" [value]="items._id">{{items.name}}</ion-option>
        </ion-select>
      </ion-item>
    
      <ion-item>
        <ion-label floating>Shippings*</ion-label>
        <ion-select [(ngModel)]="item.shippings" multiple="true">
          <ion-option *ngFor="let items of shippings" [value]="items._id">{{items.name}}</ion-option>
        </ion-select>
      </ion-item>
      
      <ion-item *ngIf="!item.shop">
        <ion-label floating>Shop*</ion-label>
        <ion-select [(ngModel)]="item.shop" [disabled]="true">
          <ion-option *ngFor="let items of shops" [value]="items._id">{{items.name}}</ion-option>
          </ion-select>
      </ion-item>

      <ion-item *ngIf="item.shop">
      <ion-label floating>Shop*</ion-label>
      <ion-select [(ngModel)]="item.shop" [disabled]="true">
        <ion-option *ngFor="let items of shops" [value]="items._id">{{items.name}}</ion-option>
        </ion-select>
    </ion-item>
    <ion-item *ngIf="chkformimg">
    <p id="productImg">Images*</p>
    <ion-upload-image [maxImage]="5" (imageOutList)="imageList($event)"></ion-upload-image>
    </ion-item>

    </ion-list>
    
    <div padding>
    <ion-row>
      <ion-col width-50>
        <button ion-button block (click)="onClick(item)">Submit</button>
      </ion-col>
      <ion-col width-50>
        <button ion-button block color="danger" (click)="canceldissmis()">Cancel</button>
      </ion-col>
    </ion-row>
    </div>
    `,
                styles: [
                    `
  ion-form-product {
    background-color: red;
  }`
                ]
            },] },
];
/** @nocollapse */
IonFormProductComponent.ctorParameters = () => [];
IonFormProductComponent.propDecorators = {
    'item': [{ type: Input },],
    'categories': [{ type: Input },],
    'shippings': [{ type: Input },],
    'shops': [{ type: Input },],
    'chkformimg': [{ type: Input },],
    'currency': [{ type: Input },],
    'itemClicked': [{ type: Output },],
    'cancelCreate': [{ type: Output },],
};
//# sourceMappingURL=ion-form-product.js.map
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
const util_1 = require("ionic-angular/util/util");
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let IonPreloadImageComponent = class IonPreloadImageComponent {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    set src(val) {
        this._src = util_1.isPresent(val) ? val : '';
    }
    set ratio(ratio) {
        this._ratio = ratio || null;
    }
    ngOnChanges(changes) {
        let ratio_height = (this._ratio.h / this._ratio.w * 100) + "%";
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._update();
        // console.log("CHANGES preload-image", this._src);
        // console.log(changes['src'].isFirstChange());
    }
    _update() {
        if (util_1.isPresent(this.alt)) {
            this._img.alt = this.alt;
        }
        if (util_1.isPresent(this.title)) {
            this._img.title = this.title;
        }
        this._img.addEventListener('load', () => {
            this._elementRef.nativeElement.appendChild(this._img);
            this._loaded(true);
        });
        this._img.src = this._src;
        this._loaded(false);
    }
    _loaded(isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IonPreloadImageComponent.prototype, "alt", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IonPreloadImageComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IonPreloadImageComponent.prototype, "src", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], IonPreloadImageComponent.prototype, "ratio", null);
IonPreloadImageComponent = __decorate([
    core_1.Component({
        selector: 'ion-preload-image',
        template: `
    <ion-spinner name="bubbles"></ion-spinner>
    <ng-content></ng-content>
    `,
        styles: [`
    position: relative;
    width: 100%;
      display: block;
    overflow: hidden;
  
      &.rounded-image
      {
          border-radius: 50%;
      }
  
    &.img-loaded
    {
      background-color: transparent;
      border: none;
  
          img
        {
              visibility: visible;
              opacity: 1;
        }
  
          ion-spinner {
              visibility: hidden;
              display: none;
          }
    }
  
    img
    {
      position: absolute;
          left: 0px;
          top: 0px;
          visibility: hidden;
          opacity: 0;
      width: 100% !important;
      height: inherit !important;
      max-width: inherit !important;
      max-height: inherit !important;
      min-width: inherit !important;
      min-height: inherit !important;
    }
  `]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], IonPreloadImageComponent);
exports.IonPreloadImageComponent = IonPreloadImageComponent;
//# sourceMappingURL=ion-preload-image.js.map
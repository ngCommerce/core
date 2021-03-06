import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { isPresent } from 'ionic-angular/util/util';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export class IonPreloadImageComponent {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    set src(val) {
        this._src = isPresent(val) ? val : '';
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
        if (isPresent(this.alt)) {
            this._img.alt = this.alt;
        }
        if (isPresent(this.title)) {
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
}
IonPreloadImageComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
/** @nocollapse */
IonPreloadImageComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
IonPreloadImageComponent.propDecorators = {
    'alt': [{ type: Input },],
    'title': [{ type: Input },],
    'src': [{ type: Input },],
    'ratio': [{ type: Input },],
};
//# sourceMappingURL=ion-preload-image.js.map
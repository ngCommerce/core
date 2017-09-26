import { ElementRef, Renderer, OnChanges, SimpleChange } from '@angular/core';
/**
 * Generated class for the IonListCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export declare class IonPreloadImageComponent implements OnChanges {
    _elementRef: ElementRef;
    _renderer: Renderer;
    _src: string;
    _ratio: {
        w: number;
        h: number;
    };
    _img: any;
    constructor(_elementRef: ElementRef, _renderer: Renderer);
    alt: string;
    title: string;
    src: string;
    ratio: {
        w: number;
        h: number;
    };
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    _update(): void;
    _loaded(isLoaded: boolean): void;
}

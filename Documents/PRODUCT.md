Usage Product
===================
ProductComponent
-------------
1. create folder `ion-form-product`in your folder conponents.
2. create file `ion-form-product.ts`in your folder `ion-form-product` 

ProductComponent.ts
-------------
1. create Template anywhere you need it :

 ```typescript
 
    @Component({
    selector: 'ion-form-product',
    template: `
    <ion-list>
    <ion-item>
        <ion-label floating>Name</ion-label>
        <ion-input type="text" [(ngModel)]="item.name"></ion-input>
    </ion-item>
    </ion-list>
    
```
2. create style anywhere you need it :

 ```typescript

    styles: [
    ion-form-product {
    background-color: red;
    }]

```
3. Import `Component Event` in your application :

	```
    import { Component, Output, EventEmitter, Input } from '@angular/core';
	```

4.   Inject the `Component Event` anywhere you need it :
	```
    export class IonFormProductComponent {
    @Input() items: any;
    @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
    }
	```
5. Import `Component` in file `index.ts` your application :
    ```
    export * from "./components/ion-form-product/ion-form-product";
    ```
IonFormProductComponent
-------------

1. import { NgModule } from '@angular/core';

```
import { EcommerceCoreModule, IonFormProductComponent } from "@ngcommerce/core";

@NgModule({
    declarations: [MyApp, IonFormProductComponent],
    imports: [EcommerceCoreModule.forRoot('http://test/api/') ]
})
export class AppModule { } 
```
2. Use in HTML
```
<ion-form-product [items]="productArray"></ion-form-product>
```

**Note :** [items] - Input categoryArray binding.

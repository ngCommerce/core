Welcome to ngCommerce!
===================


Hey! I'm your first Markdown document in **StackEdit**[^stackedit]. Don't delete me, I'm very helpful! I can be recovered anyway in the **Utils** tab of the <i class="icon-cog"></i> **Settings** dialog.

----------


Installation
-------------

1. Install the npm package.
	```
    npm install @ngcommerce/core --save
    ```

2. Import `EcommerceCoreModule` in your application and use `forRoot('apiURL')` to choose your apiURL :

    ```typescript
    import { NgModule }            from '@angular/core';
    import { EcommerceCoreModule } from "@ngcommerce/core";

    @NgModule({
        imports: [EcommerceCoreModule.forRoot('http://test/api/') ]
    })
    export class AppModule { } 
    ```
Usage
-------------
Inject the `CorService` service anywhere you need it and use it like it's `alert` :
 
```typescript
@Component({})
export class MyComponent(){

    constructor(private service: CorService){
    
            alert(service.apiURL);

    }
}
```
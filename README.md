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
    import { NgModule }         from '@angular/core';
    import { BrowserModule }    from '@angular/platform-browser';
    import { AppComponent }     from './app.component';
    import { EcommerceCoreModule } from "@ngcommerce/core";

    @NgModule({
        imports:      [ BrowserModule, EcommerceCoreModule.forRoot('http://test/api/') ],
        declarations: [ AppComponent ],
        bootstrap:    [ AppComponent ]
    })
    export class AppModule { } 
    ```
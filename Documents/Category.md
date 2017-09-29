Usage Category
===================

CategoryModel
-------------

1. Import `CategoryModel` in your application :
	```
    import { CategoryModel } from "@ngcommerce/core";
    ```
2. Properties in `CategoryModel` :
	```
	_id : string;
	name : string;
    ```
    
	Example : 
 
	```typescript
	@Component({}
	export class MyComponent(){
	
	category:CategoryModel;	
	    
	    constructor(){

	    }
	}
	```

CategoryService
-------------

1. Import `CategoryService` in your application :
	```
    import { CategoryService } from "@ngcommerce/core";
    ```
2. Inject the `CategoryService` service anywhere you need it :
 
	```typescript
	@Component({})
	export class MyComponent(){
	
	    constructor(private categoryService: CategoryService){
	    
	    }
	}
	```
3. How to use method in  `CategoryService` :

     - **getCategoryList() -** Return category data of Array[].
     - **createCategory(** *parameter* **) -** Create category data.
	     - *parameter* - Data of Category.
	 - **updateCategory(** *parameter* **) -** Update category data.
	     - *parameter* - Data of Category.
	     - *key Object* - _id
     - **getCategoryByID(** *parameter* **) -** Get category data by id.
	     - *parameter* - id of category.
	 - **deleteCategory(** *parameter* **) -** Delete category data.
	     - *parameter* - id of category.

	Example : 
 
	```typescript
	@Component({}
	export class MyComponent(){
	
	    constructor(private categoryService: CategoryService){
	    
	        this.categoryService.getCategoryList().then((data)=>{
			console.log(data);
			},(error)=>{
		        console.error(error);
	        });
	
	    }
	}
	```
IonListCategoryComponent
-------------

1. Import `IonListCategoryComponent` in your application :

    ```typescript
    import { NgModule } from '@angular/core';
    import { EcommerceCoreModule, IonListCategoryComponent } from "@ngcommerce/core";

    @NgModule({
	    declarations: [MyApp, IonListCategoryComponent],
        imports: [EcommerceCoreModule.forRoot('http://test/api/') ]
    })
    export class AppModule { } 
    ```
2. Use in HTML

	```
	<ion-list-category [items]="categoryArray"></ion-list-category>
	```
	**Note :** [items] - Input categoryArray binding.

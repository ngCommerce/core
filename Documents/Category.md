Usage Category
----------

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

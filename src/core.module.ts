import { AuthenService } from './services/authen/authen.service';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';

import { API_URL } from "./models/core.model";
import { CorService } from "./core.service";
import { CategoryService } from "./services/category/category.service";
import { ShopService } from "./services/shop/shop.service";
import { ProductService } from './services/product/product.service';
import { AddressService } from './services/address/address.service';
import { PaymentService } from './services/payment/payment.service';
import { ShippingService } from './services/shipping/shipping.service';
import { CartService } from './services/cart/cart.service';
import { OrderService } from './services/order/order.service';
import { FavoriteService } from './services/favorite/favorite.service';

import { IonListCategoryComponent } from "./components/ion-list-category/ion-list-category";
import { IonListShopComponent } from "./components/ion-list-shop/ion-list-shop";
import { IonListProductComponent } from "./components/ion-list-product/ion-list-product";
import { IonFormShopComponent } from "./components/ion-form-shop/ion-form-shop";
import { IonListXProductComponent } from "./components/ion-list-Xproduct/ion-list-x-product";
import { IonFormCategoryComponent } from "./components/ion-form-category/ion-form-category";
import { IonFormProductComponent } from "./components/ion-form-product/ion-form-product";
import { IonPreloadImageComponent } from "./components/ion-preload-image/ion-preload-image";
import { IonListFavoriteComponent } from "./components/ion-list-favorite/ion-list-favorite";
import { IonFormProfileComponent } from "./components/ion-form-profile/ion-form-profile";
import { IonListCartComponent } from "./components/ion-list-cart/ion-list-cart";
import { IonDetailProductComponent } from "./components/ion-detail-product/ion-detail-product";
import { IonFormPaymentComponent } from "./components/ion-form-payment/ion-form-payment";
import { IonFormWizardComponent } from "./components/ion-form-wizard/ion-form-wizard";
import { IonFormWizardStepComponent } from "./components/ion-form-wizard-step/ion-form-wizard-step";
import { IonFormShippingComponent } from "./components/ion-form-shipping/ion-form-shipping";
import { IonFormConfirmComponent } from "./components/ion-form-confirm/ion-form-confirm";
import { IonFormCreditComponent } from "./components/ion-form-credit/ion-form-credit";
import { IonFormDeliveryComponent } from "./components/ion-form-delivery/ion-form-delivery";
import { IonFormCounterserviceComponent } from "./components/ion-form-counterservice/ion-form-counterservice";
import { IonFormPaymentOptionComponent } from "./components/ion-form-paymentoption/ion-form-paymentoption";
import { IonDetailOrderComponent } from "./components/ion-detail-order/ion-detail-order";
import { IonListOrderComponent } from "./components/ion-list-order/ion-list-order";
import { IonSegmentOrderComponent } from "./components/ion-segment-order/ion-segment-order";
import { IonOrdersComponent } from "./components/ion-orders/ion-orders";
import { IonFormReviewComponent } from "./components/ion-form-review/ion-form-review";
@NgModule()
export class EcommerceCoreModule {

    /**
     * Provide the apiURL.
     * @param apiURL for service http.
     * 
     */
    static forRoot(apiURL: String = ""): ModuleWithProviders {
        console.log('in EcommerceCoreModule');
        return {
            ngModule: EcommerceCoreModule,
            providers: [
                CorService,
                CategoryService,
                ShopService,
                ProductService,
                AuthenService,
                AddressService,
                PaymentService,
                ShippingService,
                CartService,
                OrderService,
                FavoriteService,
                // HttpModule,

                // IonItemCategoryComponent,
                // IonItemProductComponent,
                // IonItemShopComponent,
                // IonListCategoryComponent,
                // IonListProductComponent,
                // IonListShopComponent,
                { provide: API_URL, useValue: apiURL },
            ],
        };
    }
}
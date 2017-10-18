import { NewProductReactiveComponent } from './new-product-reactive.component';
import { NewProductComponent } from './new-product.component';
import { ProdService } from './prod.service';
import { ProductService } from './cart/product.service';
import { CartModule } from './cart/cart.module';

import { BasicHighlightDirective } from './basic-highlight/basic.highlight.directive';
import { ProductDetailComponent } from './product-detail.component';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    BasicHighlightDirective,
    NewProductComponent,
    NewProductReactiveComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CartModule
  ],
  providers: [ProductService,ProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }

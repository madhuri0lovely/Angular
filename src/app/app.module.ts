import { CartModule } from './cart/cart.module';
import { TotalPricePipe } from './cart/totalPrice.pipe';
import { ProductService } from './product.service';
import { CartDetailComponent } from './cart/cart-detail.component';
import { BasicHighlightDirective } from './basic-highlight/basic.highlight.directive';
import { ProductDetailComponent } from './product-detail.component';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CartModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

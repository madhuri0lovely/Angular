import { CommonModule } from '@angular/common';
import { CartDetailComponent } from './cart-detail.component';
import { TotalPricePipe } from '../cart/totalPrice.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartDetailComponent,
    TotalPricePipe
  ],
  exports: [
    CartDetailComponent,
    TotalPricePipe
  ],
  providers: [],
})
export class CartModule { }

import { OnInit } from '@angular/core';
import { CartItem } from './cart';

import { ProductService } from './product.service';
import { Product } from './../product';

import { Component, Input, EventEmitter, Output , OnChanges} from '@angular/core';

@Component({
    selector: 'cart-detail',
    template:`
    <div *ngIf="product">
    <h3>Shopping Cart</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Product Id</th><th>Product Name</th><th>Description</th>
            <th>Category</th><th>Price</th><th>Quantity</th><th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of cart">
            <td>{{p.product.id}}</td><td>{{p.product.name}}</td><td>{{p.product.description}}</td>
            <td>{{p.product.category}}</td>
            <td>{{p.product.price}}</td>
            <td>{{p.quantity}}</td>
            <td>{{p | totalPrice}}</td>
            </tr>
        </tbody>
      </table>
      <div>
      <span>Total - </span><span>{{calculateSum()}}</span>
      </div>
    </div><br><br><br>
    
  `,
    styles:[]
})
export class CartDetailComponent implements OnInit{
  @Input() product: Product;
  total:number =0 ;
  cart:CartItem[]=[];
  constructor(private productService: ProductService) {
  }

  ngOnInit(){

    this.cart = this.productService.getitemsInCart();

    //this.productService.getitemsInCart().then(cart => this.cart = cart);
  }

  calculateSum(){
    this.total = this.productService.findSum();
    return this.total;
    
  }

  

}
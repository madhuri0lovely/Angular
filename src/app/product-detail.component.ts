import { CartItem } from './cart/cart';
import { Product } from './product';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from './cart/product.service';

@Component({
  selector: 'product-detail',
  template: `
    <div *ngIf="product">
      <h2 dirBasicHighlight>{{product.name}} details!</h2>
      <div><label>id: </label>{{product.id}}</div>
      <div>
       <div><label>Name: </label>{{product.name}}</div>
      <!--  <div><input [(ngModel)]="quantity" placeholder="Quantity"/></div> -->
          
      </div>
    </div>
    <button (click)="requestDelete()">Delete</button>
    <button (click)="addCart()">Add To Cart</button>
    <button (click)="toggleShowCart()">No of items in cart : {{NoOfitemsInCart()}} and show cart</button>
    <hr>
    <cart-detail *ngIf ="showCart" [product]="productToBeAdded"></cart-detail>

    <!-- <cart-detail [product]="productToBeAdded"  ></cart-detail>  -->
  `,
  styles: []
})
export class ProductDetailComponent {

  quantity: number;
  //cart:CartItem[]=[];

  constructor(public productService: ProductService) {

  }


  //The product property is typed as an instance of Product
  @Input()
  product: Product;

  @Output()
  requestDeleteEvent = new EventEmitter<Product>();

  requestDelete() {
    this.requestDeleteEvent.emit(this.product);
  }

  productToBeAdded: Product;

  addCart() {
    this.productToBeAdded = this.product;
    this.productService.addProduct(this.productToBeAdded, this.quantity);
     
  }

  /*
  ngOnInit(){
    this.productService.getitemsInCart().then(val => this.cart = val);
  }
  */

  NoOfitemsInCart(){
    let cart = this.productService.getitemsInCart();
    return cart.map(item => item.quantity).
    reduce((total, current) => (total + current), 0);

        //return this.cart.map(item => item.quantity).
        //reduce((total, current) => (total + current), 0);

      
  }

  showCart: boolean;

  toggleShowCart() {
    console.log("toggle");
    this.showCart = !this.showCart;
  }

}
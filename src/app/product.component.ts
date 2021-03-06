import { ProdService } from './prod.service';
import { Product, PRODUCTS } from './product';
import { Component } from '@angular/core';

@Component({
  selector: 'product-component',
  template: `
  <div class="container">
  <div class="row">
    <h1>{{title|uppercase}}</h1>
    <ul class="products">
    <li *ngFor="let product of products;let i=index;trackBy:trackByProductId" (click)="onSelect(product)" [class.selected]="product === selectedProduct">
      <span class="badge">Index:{{i+1}}</span><span class="badge">Id:{{product.id}}</span><span class="badge">{{product.name}}</span>
      <span class="badge">{{product.price}}</span><span class="badge">{{product.description}}</span>
    </li>
    </ul>
    <button (click)="showNewFormTemplate()">Add Product by template</button>
    <button (click)="showNewFormReactive()">Add Product by Reactive</button>

    <new-product *ngIf ="newProductTemplate"></new-product>
    <new-product-reactive *ngIf ="newProductReactive"></new-product-reactive>
    <hr>


    <product-detail [product]="selectedProduct" (requestDeleteEvent)="deleteProduct($event)"></product-detail>
    <!-- <button (click)="changeProduct()">Change Product</button> -->
  
  </div>
  </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  title = "Products";
  
  //assigning the whole list of products
  products;

  //declaring the selected product of type Product
  selectedProduct: Product;

  constructor(private prodService: ProdService) { }

  
  ngOnInit(): void {
    this.products = this.prodService.getProducts();
  }
/*
  ngOnInit(): void {
    this.prodService.getProducts().then(products => this.products = products);
  }
  */
  //on click of particular product in a list,we ae assigning it as selected product
  onSelect(product:Product){
    this.selectedProduct = product;
  }
  //only when there is new product with different id will get loaded else not.
  //It saves time and avoid unnecessary loading of DOM elements with data
  trackByProductId(index:number,product:Product):number{
    return product.id;
  }

  changeProduct(){
   const change = true;
   this.selectedProduct = {
      id:500,
      name:'iTv',
      description: 'apple tv',
      price:5000,
      category:'electronic'
    }

    let newProduct = this.selectedProduct;

    let oldProduct = this.products.find(p => p.id=== this.selectedProduct.id);
    this.products.splice(this.products.indexOf(oldProduct), 1, newProduct);

  }

  deleteProduct(product:Product){
    this.products.pop();
  }

  newProductTemplate: boolean;
  newProductReactive: boolean;
  
  showNewFormTemplate() {
      this.newProductTemplate = !this.newProductTemplate;
    }
    showNewFormReactive() {
      this.newProductReactive = !this.newProductReactive;
    }
  
}



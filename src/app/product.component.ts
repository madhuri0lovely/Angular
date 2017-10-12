import { Product } from './product';
import { Component } from '@angular/core';


const PRODUCTS:Product[] = [{
  id : 1,
  name : "MacBook",
  description : "Electronic device",
  price : 4000,
  category : "Electronic"
},
{
  id : 2,
  name : "iphone",
  description : "Electronic device",
  price : 4000,
  category : "Electronic"
},
{
  id : 1,
  name : "ipad",
  description : "Electronic device",
  price : 4000,
  category : "Electronic"
}]

@Component({
  selector: 'product-component',
  template: `
  <h1>{{title}}</h1>
  <h2>{{title}} details!</h2>
  <ul class="products">
  <li *ngFor="let product of products" (click)="onSelect(product)" [class.selected]="product === selectedProduct">
    <span class="badge">{{product.id}}</span><span class="badge">{{product.name}}</span>
    <span class="badge">{{product.price}}</span><span class="badge">{{product.description}}</span>
  </li>
  </ul>
  <product-detail [product]="selectedProduct"></product-detail>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
    width: 500px;
  }
  .products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .products .text {
    position: relative;
    top: -3px;
  }
  .products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class ProductComponent {
  title = "Products";
  
  //assigning the whole list of products
  products = PRODUCTS;

  //declaring the selected product of type Product
  selectedProduct: Product;
  
  //on click of particular product in a list,we ae assigning it as selected product
  onSelect(product:Product){
    this.selectedProduct = product;
  }
  
}



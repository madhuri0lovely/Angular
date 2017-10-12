import { Product } from './product';
import { Component,Input } from '@angular/core';

@Component({
    selector: 'product-detail',
    template:`
    <div *ngIf="product">
    <h2>{{product.name}} details!</h2>
    <div><label>id: </label>{{product.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="product.name" placeholder="name"/>
    </div>
  </div>
  `,
    styles:[]
})
export class ProductDetailComponent{
  //The product property is typed as an instance of Product

  @Input()
  product: Product;

}
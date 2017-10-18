import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ProdService } from './prod.service';
import { Product, PRODUCTS } from './product';
import { Component } from '@angular/core';


@Component({
  selector: 'new-product',
  template: `
  <div class="container">
  <div class="row">
  <form #addProductForm ="ngForm" (ngSubmit)="addNewProduct(addProductForm)">
        <div class="form-group">
            <label for="p_id">Product Id</label>
            <input ngModel #productId = "ngModel" required pattern="^(0|[1-9][0-9]*)$" type="text" id="p_id" name="id" class="form-control">
            <div class="alert alert-danger" *ngIf="productId.touched && !productId.valid">
                <div *ngIf="productId.errors.required">Product id is required</div>
                <div *ngIf="productId.errors.pattern">Product id should be numbers only</div>
            </div>
        </div>
        <div class="form-group">
            <label for="p_name">Product Name</label>
            <input type="text" ngModel #productName = "ngModel" required id="p_name" name="name" class="form-control">
            <div class="alert alert-danger" *ngIf="productName.touched && !productName.valid">
                Product name is required
            </div>
        </div>
        <div class="form-group">
            <label for="p_desc">Product Description</label>
            <input type="text" ngModel #productDesc = "ngModel" required id="p_desc" name="description" class="form-control">
            <div class="alert alert-danger" *ngIf="productDesc.touched && !productDesc.valid">
                Product description is required
            </div>
        </div>
        <div class="form-group">
            <label for="p_desc">Product Price</label>
            <input type="text" ngModel #productPrice = "ngModel" required id="p_desc" name="price" class="form-control">
            <div class="alert alert-danger" *ngIf="productPrice.touched && !productPrice.valid">
                Product price is required
            </div>
        </div>
        <div class="form-group">
            <label for="p_category">Product Category</label>
            <input type="text" ngModel #productCategory = "ngModel" required id="p_category" name="category" class="form-control">
            <div class="alert alert-danger" *ngIf="productCategory.touched && !productCategory.valid">
                Product Category is required
            </div>
        </div>
        <button class="btn btn-primary" [disabled]="addProductForm.invalid">Submit</button>
    </form>
  </div>
  </div>
  `,
  styleUrls: ['./product.component.css']
})
export class NewProductComponent {

    constructor(public prodService: ProdService) {    
    }
  
  addNewProduct(addProductForm:NgForm){
    this.prodService.addNewProduct(addProductForm.value);
  }
  
}



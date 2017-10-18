
import { NgForm } from '@angular/forms';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ProdService } from './prod.service';
import { Product, PRODUCTS } from './product';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { onlyNumbersValidator, forbiddenNameValidator,forbiddenProductId } from './custom-validator';


@Component({
  selector: 'new-product-reactive',
  template: `
  <div class="container">
  <div class="row">
  <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
            <label for="p_id">Product Id</label>
            <input formControlName="id" type="text" id="p_id"  class="form-control">
            <div class="alert alert-danger" *ngIf="!signUpForm.get('id').valid && signUpForm.get('id').touched">
                <div *ngIf="signUpForm.get('id').errors.required">Product id is required#</div>
                <div *ngIf="signUpForm.get('id').errors.productIdFormidden">Not unique id</div>
            </div>
        </div>
        <div class="form-group">
            <label for="p_name">Product Name</label>
            <input formControlName="name" type="text" id="p_name" class="form-control">
            <div class="alert alert-danger" *ngIf="!signUpForm.get('name').valid && signUpForm.get('name').touched" >
            <div *ngIf="signUpForm.get('name').errors.required">Product name is required#</div>
            <div *ngIf="signUpForm.get('name').errors.forbiddenName">Name should not be bob</div>
            </div>
        </div>
        <div class="form-group">
            <label for="p_desc">Product Description</label>
            <input type="text" id="p_desc" formControlName="description" class="form-control">
            <div class="alert alert-danger" *ngIf="!signUpForm.get('description').valid && signUpForm.get('description').touched">
                Product description is required
            </div>
        </div>
        <div class="form-group">
            <label for="p_desc">Product Price</label>
            <input type="text" id="p_desc" formControlName="price" class="form-control">
            <div class="alert alert-danger" *ngIf="!signUpForm.get('price').valid && signUpForm.get('price').touched">
            <div *ngIf="signUpForm.get('price').errors.required">Product price is required#</div>
            <div *ngIf="signUpForm.get('price').errors.onlyNumbers">Price should be in numbers</div>
            </div>
        </div>
        <div class="form-group">
            <label for="p_category">Product Category</label>
            <input type="text" id="p_category" formControlName="category" class="form-control">
            <div class="alert alert-danger" *ngIf="!signUpForm.get('category').valid && signUpForm.get('category').touched">
                Product Category is required
            </div>
        </div>
        <button class="btn btn-primary" [disabled]="signUpForm.invalid">Submit</button>
    </form>
  </div>
  </div>
  `,
  styleUrls: ['./product.component.css']
})
export class NewProductReactiveComponent {

    constructor(public prodService: ProdService) {
        
    }

    signUpForm: FormGroup;

    ngOnInit(): void {
    this.signUpForm = new FormGroup({
        'id': new FormControl('', [Validators.required],forbiddenProductId),
        'name': new FormControl('',[Validators.required, forbiddenNameValidator(/bob/i)]),
        'description': new FormControl('', Validators.required),
        'price': new FormControl('', [Validators.required, onlyNumbersValidator()]),
        'category': new FormControl('', Validators.required)
      });
    }

    onSubmit() {
        console.log(this.signUpForm.value);
        this.prodService.addNewProduct(this.signUpForm.value);
      }

}



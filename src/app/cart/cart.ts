import { Product } from './../product';

export class CartItem{
    //product:Product
    //quantity:number=0;

    constructor(public product:Product, public quantity?:number){}
  
  }
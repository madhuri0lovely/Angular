import { CartItem } from './cart';
import { Product } from './../product';

import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    productList: Product[] = new Array<Product>();
    quantity:number = 0;
    sum=0;
    items: CartItem[] = new Array<CartItem>();

    
    getitemsInCart(){
        return this.items;
    }
    
    /*getitemsInCart(): Promise<CartItem[]> {
        return Promise.resolve(this.items);
      }*/

    getData(): Product[] {
        //console.log("service get data method : " + this.productList)
        return this.productList;
    }
    

    addProduct(product: Product, quantity: number) {

        let found = false;
        this.items.forEach(item=>{
            if(item.product.id === product.id){
                
                found = true;
                item.quantity = item.quantity+1;
                //this.size++;
                return;
            }
        });

        if(!found){
            //let item = new CartItem();
            //item.product = product;
            //item.quantity = quantity;
            //this.items.push(item);
            this.items.push(new CartItem(product,1));
            
            //this.size++
        }
        
    }

    findSum():number {
        return this.items.reduce((sum,item)=>sum + item.product.price*item.quantity,0);
        
    }
    
}
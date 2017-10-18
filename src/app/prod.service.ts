import { PRODUCTS, Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdService {
    
    getProducts() {
        return PRODUCTS;
      }
 /*   
    //Product service makes a promise
      getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
      }
*/
/*
    getProductsSlowly(): Promise<Product[]> {
      return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getProducts()), 2000);
      });
    }
    */
      addNewProduct(p){
        PRODUCTS.push(p);
        console.log(PRODUCTS);
      }
      
}
export class Product{
    id:number;
    name:string;
    description:string;
    price:number;
    category:string;
}

export const PRODUCTS:Product[] = [{
    id : 100,
    name : "MacBook",
    description : "Electronic device",
    price : 1000,
    category : "Electronic"
  },
  {
    id : 200,
    name : "iphone",
    description : "Electronic device",
    price : 2000,
    category : "Electronic"
  },
  {
    id : 300,
    name : "ipad",
    description : "Electronic device",
    price : 3000,
    category : "Electronic"
  }]
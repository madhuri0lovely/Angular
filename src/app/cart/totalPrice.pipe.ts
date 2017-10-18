import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'totalPrice',pure:false
})
export class TotalPricePipe implements PipeTransform{
    transform(value){

            return (value.product.price * value.quantity);
            
    }
}
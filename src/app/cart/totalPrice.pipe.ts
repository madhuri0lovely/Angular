import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'totalPrice'
})
export class TotalPricePipe implements PipeTransform{
    transform(value){

            return (value.product.price * value.quantity);
            
    }
}
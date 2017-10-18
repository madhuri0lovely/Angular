import { Observable } from 'rxjs/Observable';
import {AbstractControl,ValidationErrors} from '@angular/forms';
import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export function onlyNumbersValidator(): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} => {
        const accepted = /^[0-9]*$/.test(control.value);
        return accepted ? null : {'onlyNumbers': {value: control.value}};

    }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

export function forbiddenProductId(control: AbstractControl):Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject) => {
        setTimeout(()=>{
            if(control.value === "P123"){
                resolve({'productIdFormidden': true})
            }else{
                resolve(null);
            }
        },2000);
      });
      return promise;
}


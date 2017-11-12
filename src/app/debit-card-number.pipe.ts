import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debitCardNumber'
})
export class DebitCardNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(typeof value !== 'string')
      return value;

    let tempArray = [];
    for(var index = 0; index<value.length; index+=4) {
      tempArray.push( value.substring(index, index + 4) );
    }

    return tempArray.join(" ");
  }

}

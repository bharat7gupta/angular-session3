import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

function validateCardNumber() {
  return (control: FormControl) => {
    let cardNumberRegEx = /^\d{16}$/i;

    return cardNumberRegEx.test(control.value) ? null : {
      validateCardNumber: {
        valid: false
      }
    };
  };
}

@Directive({
  selector: '[validateCardNumber][ngModel],[validateCardNumber][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CardNumberValidator), multi: true }
  ]
})
export class CardNumberValidator {

  validator: Function;

  constructor() {
    this.validator = validateCardNumber();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}

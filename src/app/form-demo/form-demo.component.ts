import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

import { validateCardNumber } from '../card-number.validator';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  // template driven form variables
  payee: any = {};

  // reactive form variables
  reactivePaymentForm: FormGroup;

  constructor(
    private jsonPipe: JsonPipe,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.reactivePaymentForm = this.fb.group({
      rName: new FormControl('', [Validators.required]),
      rCardNumber: new FormControl('', [Validators.required, validateCardNumber()])
    });
  }

  showTemplateFormData() {
    alert("Sumitting: " + this.jsonPipe.transform(this.payee));
  }

  showReactiveFormData() {
    alert("Sumitting: " + this.jsonPipe.transform(this.reactivePaymentForm.value));
  }
}

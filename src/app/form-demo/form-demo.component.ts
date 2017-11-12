import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  payee: any = {};

  constructor(private jsonPipe: JsonPipe) { }

  ngOnInit() {
  }

  showTemplateFormData() {
    alert("Sumitting: " + this.jsonPipe.transform(this.payee));
  }

}

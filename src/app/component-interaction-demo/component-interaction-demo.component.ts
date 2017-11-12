import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction-demo',
  templateUrl: './component-interaction-demo.component.html',
  styleUrls: ['./component-interaction-demo.component.css']
})
export class ComponentInteractionDemoComponent implements OnInit {

  messages: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  addMessage(message) {
    this.messages.push(message);
  }

}

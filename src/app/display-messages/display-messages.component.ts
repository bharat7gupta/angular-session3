import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display-messages',
  templateUrl: './display-messages.component.html',
  styleUrls: ['./display-messages.component.css']
})
export class DisplayMessagesComponent implements OnInit {

  @Input()
  messages: Array<string>;
  
  constructor() { }

  ngOnInit() {
  }

}

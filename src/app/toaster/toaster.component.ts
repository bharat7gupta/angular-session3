declare var toastr: any;

import { Component, OnInit } from '@angular/core';
import { GlobalMessageService } from '../global-message.service';

@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private globalMessage: GlobalMessageService) { }

  ngOnInit() {
    this.globalMessage.onNewMessage$
      .subscribe((message) => toastr.success("You have a new message: " + message));
    
  }

}

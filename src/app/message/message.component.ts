import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GlobalMessageService } from '../global-message.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Output()
  onNewMessage = new EventEmitter();

  message: string;
  
  constructor(private globalMessage: GlobalMessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.onNewMessage.emit(this.message);
    // this.globalMessage.sendMessage(this.message);
    this.message = "";
  }

}
